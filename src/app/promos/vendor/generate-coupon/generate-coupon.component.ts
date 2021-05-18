import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { generateCouponCode } from 'src/app/shared/coupon-generator';
import { CouponDTO, CouponPoints } from 'src/app/shared/models/Coupon';
import { ParticipantDTO, PromoDTO } from 'src/app/shared/models/Promo';
import { CustomerDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-generate-coupon',
  templateUrl: './generate-coupon.component.html',
  styleUrls: ['./generate-coupon.component.scss'],
})
export class GenerateCouponComponent implements OnInit {
  form: FormGroup = null;
  code = '';
  isOneCouponClose = false;
  message: string = null;
  messagePrize: string = null;
  sub: Subscription = new Subscription();
  private errors = '';
  pid = null;
  uid = null;

  constructor(
    private fire: FireService,
    private router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      promoId: [{ value: this.pid || 0, disabled: true }],
      customerId: [{ value: this.uid || 0, disabled: true }],
      points: [null, [Validators.min(1), Validators.required]],
      code: [''],
    });

    this.sub.add(
      this.route.queryParams.subscribe((data) => {
        this.pid = data.pid;
        this.uid = data.uid;

        this.form = this.fb.group({
          promoId: [{ value: this.pid, disabled: true }],
          customerId: [{ value: this.uid, disabled: true }],
          points: [null, [Validators.min(1), Validators.required]],
          code: [''],
        });
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  generateCodeAndSubmit(): void {
    this.message = '';
    const couponPure: CouponDTO = this.configureCouponPureDTO();

    this.fire
      .getCouponsCollectionRef()
      .add(couponPure)
      .then((data: DocumentReference) => {
        const couponId: string = data.id;
        const newDocument = { ...couponPure, id: couponId };
        const newDocumentPure = Object.assign({}, newDocument);

        this.fire
          .getCouponsCollectionRef()
          .doc(couponId)
          .set({ ...newDocumentPure })
          .catch((e) => {})
          .then(() => {
            this.fire
              .getUsersCollectionRef()
              .doc(newDocumentPure.customerId)
              .get()
              .toPromise()
              .catch((e) => {})
              .then((customerData: any) => {
                const customer = customerData.data() as CustomerDTO;
                const updatedCoupons = [...customer.coupons, couponId];

                const updatedCustomer = {
                  ...customer,
                  coupons: [...updatedCoupons],
                };

                const customerPureDTO: CustomerDTO = Object.assign(
                  {},
                  updatedCustomer
                );

                this.fire
                  .getUsersCollectionRef()
                  .doc(newDocumentPure.customerId)
                  .set({ ...customerPureDTO })
                  .catch((e) => {})
                  .then(() => {
                    this.composeFinalMessage();
                  })
                  .catch((e) => (this.errors += e));
              })
              .catch((e) => (this.errors += e));
          })
          .catch((e) => (this.errors += e));
      })
      .catch((e) => (this.errors += e))
      .then(() => {
        this.fire
          .getPromosCollectionRef()
          .doc(this.pid)
          .get()
          .toPromise()
          .then((promoData: any) => {
            const promo = promoData.data() as PromoDTO;
            const participant: ParticipantDTO = {
              ...promo.participantsTable.find(
                (participant: ParticipantDTO) => participant.uid === this.uid
              ),
            };

            if (participant) {
              const participantCurrentPoints: number = parseInt(
                `${participant.currentPoints}`,
                0
              );

              const isOneCouponClose =
                promo.pointsRedeem <=
                couponPure.points + participantCurrentPoints;

              if (isOneCouponClose) {
                this.isOneCouponClose = isOneCouponClose;
              }
            }
          })
          .catch((e) => (this.errors += e));
      })
      .catch((e) => (this.errors += e));
    console.log(this.errors);
  }

  private configureCouponPureDTO(): CouponDTO {
    const code = generateCouponCode();
    this.code = code;

    const points = this.form.value['points'] || 0;
    const promoId = this.pid;
    const customerId = this.uid;

    const coupon: CouponPoints = {
      promoId,
      customerId,
      code,
      points,
      realised: false,
      id: '',
      type: 'points',
    };

    const couponPureDTO: CouponDTO = Object.assign({}, coupon);
    return couponPureDTO;
  }

  private composeFinalMessage(): void {
    if (this.errors.length) {
      this.message += this.errors;
    } else {
      this.message =
        'Kupon został pomyślnie wygenerowany i przypisany do konta Uczestnika (Klienta). Poinformuj go o tym i przypomnij, że realizację Kuponu należy wykonać w aplikacji.';

      if (this.isOneCouponClose) {
        this.messagePrize =
          'UWAGA: Możesz wydać Klientowi nagrodę jeśli od razu odbierze punkty w aplikacji! Poinformuj go o tym.';
      }
    }
  }
}
