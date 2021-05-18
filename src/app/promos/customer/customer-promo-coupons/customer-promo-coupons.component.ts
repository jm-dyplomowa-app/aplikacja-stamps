import { Component } from '@angular/core';
import {
  DocumentData,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { generateCouponCode } from 'src/app/shared/coupon-generator';
import {
  CouponDTO,
  CouponPrize,
  CouponPrizeObject,
} from 'src/app/shared/models/Coupon';
import { ParticipantDTO, PromoDTO } from 'src/app/shared/models/Promo';
import { CustomerDTO, UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-customer-promo-coupons',
  templateUrl: './customer-promo-coupons.component.html',
  styleUrls: ['./customer-promo-coupons.component.scss'],
})
export class CustomerPromoCouponsComponent {
  pid: string = null;
  uid: string = null;
  sub: Subscription = new Subscription();
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);
  data: CouponDTO[] = [];
  coupons: { points: CouponDTO[]; prize: CouponDTO[] } = {
    points: [],
    prize: [],
  };
  currentPromo: PromoDTO = null;
  currentUser: CustomerDTO = null;
  currentParticipant: ParticipantDTO = null;
  canRedeem = false;
  redeemSuccess = false;
  exchangingProcess = false;

  constructor(
    private fire: FireService,
    public route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.sub.add(
      this.user$.subscribe((user) => {
        this.currentUser = user as CustomerDTO;
      })
    );

    this.sub.add(
      this.route.queryParams.subscribe((data) => {
        this.pid = data.pid;
        this.uid = data.uid;

        this.reqPromo();
        this.reqCustomerPromoCoupons();
      })
    );
  }

  reqPromo() {
    this.fire.db.firestore
      .collection('promos')
      .where('pid', '==', this.pid)
      .get()
      .then((data: QuerySnapshot<DocumentData>) => {
        data.forEach((item) => {
          this.currentPromo = item.data() as PromoDTO;
          this.currentParticipant = this.findParticipant();
        });
      });
  }

  reqCustomerPromoCoupons() {
    let promisePromos: PromoDTO[] = [];
    let promiseCoupons: CouponDTO[] = [];

    Promise.all([
      this.fire.db.firestore
        .collection('coupons')
        .where('customerId', '==', this.uid)
        .where('promoId', '==', this.pid)
        .get(),
      ,
      this.fire.db.firestore.collection('promos').get(),
    ])
      .then(
        (
          values: [
            QuerySnapshot<DocumentData[]>,
            any,
            QuerySnapshot<DocumentData[]>
          ]
        ) => {
          values.forEach((value: QuerySnapshot<DocumentData[]>) => {
            if (value) {
              value.forEach((v: DocumentData) => {
                const data = { ...v.data() };
                let item: PromoDTO | CouponDTO = null;

                if (data['pid']) {
                  item = data as PromoDTO;
                  promisePromos.push(item);
                }

                if (data['promoId']) {
                  item = data as CouponDTO;
                  promiseCoupons.push(item);
                }
              });
            }
          });
        }
      )
      .then(() => {
        this.data = [];
        this.coupons.points = [];
        this.coupons.prize = [];

        promiseCoupons.forEach((coupon) => {
          let item: any = null;
          promisePromos.forEach((promo) => {
            if (coupon.promoId === promo.pid) {
              item = { ...coupon, promoName: promo.promoName };
              this.data.push(item);
              this.currentPromo = promo;
              this.currentParticipant = this.findParticipant();
            }
          });
        });
      })
      .finally(() => {
        this.separateCoupons();
        this.setCanRedeem();
      });
  }

  findParticipant() {
    const part = this.currentPromo?.participantsTable.find(
      (p) => p.uid === this.uid
    );

    return part;
  }

  setCanRedeem() {
    this.canRedeem =
      this.currentParticipant?.currentPoints >= this.currentPromo?.pointsRedeem;
  }

  private configureCouponPureDTO(): CouponDTO {
    const code = generateCouponCode();

    const prize: CouponPrizeObject = {
      description: this.currentPromo.prizeDescription,
      quantity: this.currentPromo.prizeQuantity,
    };

    const promoId = this.pid;
    const customerId = this.uid;

    const coupon: CouponPrize = {
      promoId,
      customerId,
      code,
      prize,
      realised: false,
      id: '',
      type: 'prize',
    };

    const couponPureDTO: CouponDTO = Object.assign({}, coupon);
    return couponPureDTO;
  }

  private configurePromoPureDTO() {
    let promo: PromoDTO = { ...this.currentPromo };

    promo.participantsTable.forEach((p) => {
      if (p.uid === this.uid) {
        p.currentPoints -= promo.pointsRedeem;
      }
    });

    const promoPureDTO: PromoDTO = Object.assign({}, promo);
    return promoPureDTO;
  }

  generateCodeAndSubmit() {
    const couponPure: CouponDTO = this.configureCouponPureDTO();
    const promoPure: PromoDTO = this.configurePromoPureDTO();

    Promise.all([
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
            .set({ ...newDocumentPure });
        }),
      this.fire
        .getPromosCollectionRef()
        .doc(promoPure.pid)
        .set({ ...promoPure }),
    ]).finally(() => {
      this.reqCustomerPromoCoupons();
    });
  }

  separateCoupons() {
    this.data.forEach((coupon) => {
      this.coupons[coupon.type].push(coupon);
    });
  }

  realizeCoupon(coupon: CouponDTO) {
    if (!coupon.realised) {
      this.exchangingProcess = true;
      const promo = this.currentPromo;
      let coupons: CouponDTO[] = [];

      const participants: ParticipantDTO[] = promo.participantsTable.map(
        (p) => {
          if (p.uid === this.uid) {
            p.currentPoints = Number(p.currentPoints) + Number(coupon.points);

            return p;
          } else return p;
        }
      );

      this.fire
        .getPromosCollectionRef()
        .doc(promo.pid)
        .update({ participantsTable: participants })
        .then(() => {
          this.fire
            .getCouponsCollectionRef()
            .doc(coupon.id)
            .update({ realised: true })

            .then(() => {
              this.fire.db.firestore
                .collection('coupons')
                .where('customerId', '==', this.uid)
                .where('promoId', '==', promo.pid)
                .get()
                .then((value: QuerySnapshot<DocumentData[]>) => {
                  if (value) {
                    value.forEach((v: DocumentData) => {
                      const data: CouponDTO = { ...v.data() };
                      coupons.push(data);
                    });
                  }
                });
            })
            .finally(() => {
              this.data = coupons;
              this.currentPromo = promo;
              this.reqCustomerPromoCoupons();
              this.exchangingProcess = false;
            });
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
