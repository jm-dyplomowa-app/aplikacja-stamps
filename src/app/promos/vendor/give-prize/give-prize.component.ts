import { Component, OnInit } from '@angular/core';
import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from '@angular/fire/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FireService } from 'src/app/fire.service';
import { COUPON_CODE_LENGTH } from 'src/app/shared/coupon-generator';
import { CouponDTO, CouponPrize } from 'src/app/shared/models/Coupon';
import { ParticipantDTO, PromoDTO } from 'src/app/shared/models/Promo';

@Component({
  selector: 'app-give-prize',
  templateUrl: './give-prize.component.html',
  styleUrls: ['./give-prize.component.scss'],
})
export class GivePrizeComponent {
  form: FormGroup;

  verified = false;
  coupon: CouponPrize = null;
  alreadyRealised = false;
  realisationComplete = false;

  wrongCoupon = false;

  constructor(
    private fire: FireService,
    private fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    let group = {};

    group['code'] = new FormControl('', [
      Validators.required,
      Validators.minLength(COUPON_CODE_LENGTH),
    ]);

    this.form = this.fb.group(group);
  }

  verify() {
    const { code } = this.form.getRawValue();

    this.fire.db.firestore
      .collection('coupons')
      .where('type', '==', 'prize')
      .where('code', '==', code)
      .get()
      .then((data: QuerySnapshot<DocumentData>) => {
        console.log(data.empty);

        if (data.empty === false) {
          console.log('data', data.empty);

          data.forEach((value: QueryDocumentSnapshot<DocumentData>) => {
            console.log('data for each');
            if (value) {
              console.log('value');
              const data = { ...value.data() };
              this.coupon = data as CouponPrize;
              this.coupon.type === 'prize'
                ? (this.wrongCoupon = false)
                : (this.wrongCoupon = true);
            }
          });
        } else {
          this.wrongCoupon = false;
        }
      })
      .finally(() => {
        if (this.coupon) {
          this.verified = true;

          if (this.coupon.realised) {
            this.alreadyRealised = true;
          }
        } else {
          this.wrongCoupon = true;
        }
      });
  }

  realise() {
    let promo: PromoDTO = null;
    let participant: ParticipantDTO = null;
    if (this.coupon && this.coupon.realised === false) {
      this.coupon.realised = true;
      const updatedCoupon: CouponPrize = { ...this.coupon, realised: true };
      const pureDTO: CouponDTO = Object.assign({}, updatedCoupon);

      this.fire
        .getCouponsCollectionRef()
        .doc(pureDTO.id)
        .set({ ...pureDTO })
        .then(() => {});

      this.fire
        .getPromosCollectionRef()
        .doc(pureDTO.promoId)
        .get()
        .toPromise()
        .then((data: any) => {
          promo = data.data() as PromoDTO;
          promo.participantsTable.forEach((p: ParticipantDTO) => {
            if (p.uid === pureDTO.customerId) {
              p.prizeCounter += 1;
            }
          });
        })
        .then(() => {
          const updatedPromo = Object.assign({}, { ...promo });

          this.fire
            .getPromosCollectionRef()
            .doc(promo.pid)
            .set({ ...updatedPromo })
            .finally(() => {
              this.realisationComplete = true;
            });
        });
    }
  }

  updatePromo() {}
}
