import { Component, Input, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { CouponDTO } from 'src/app/shared/models/Coupon';
import { PromoDTO } from 'src/app/shared/models/Promo';
import { CustomerDTO, UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-vendor-promos',
  templateUrl: './vendor-promos.component.html',
  styleUrls: ['./vendor-promos.component.scss'],
})
export class VendorPromosComponent implements OnInit {
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);
  vendorId = '';
  @Input() customerId = '';
  @Input() tableName = 'PROMOCJE TWOJEGO SKLEPU';

  promos$: Observable<
    DocumentData[] | PromoDTO[]
  > = this.fire.getPromosCollectionRef().valueChanges();
  promos: DocumentData[] | PromoDTO[];

  constructor(
    private router: Router,
    private fire: FireService,
    public auth: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUserProfile).subscribe((data) => {
      if (data && data.uid) {
        this.vendorId = data.uid;
        this.promos$.subscribe((promos) => {
          if (this.vendorId) {
            this.promos = promos.filter(
              (promo: PromoDTO) => promo.vendorId === this.vendorId
            );
          } else {
            this.promos = promos;
          }
        });
      }
    });
  }

  delete(promo: PromoDTO) {
    console.log('PROMO TO DELETE', promo.pid);
    let promises: Promise<any>[] = [];
    let promises2: Promise<any>[] = [];
    if (confirm('Czy na pewno chcesz usunąć promocję?')) {
      this.fire
        .getPromosCollectionRef()
        .doc(promo.pid)
        .get()
        .toPromise()
        .then(() => {
          var promoCouponsQuery = this.fire.db.firestore
            .collection('coupons')
            .where('promoId', '==', promo.pid);

          let couponUsers: {
            coupon: CouponDTO;
            couponRef;
            userId: string;
          }[] = [];

          promoCouponsQuery
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                couponUsers.push({
                  coupon: doc.data() as CouponDTO,
                  couponRef: doc.ref,
                  userId: (doc.data() as CouponDTO).customerId,
                });
              });
            })
            .then(() => {
              const uniqueUsersToUpdate = new Set([
                ...couponUsers.map(({ userId }) => userId),
              ]);

              uniqueUsersToUpdate.forEach((user) => {
                promises.push(
                  this.fire.db.firestore
                    .collection('users')
                    .where('uid', '==', user)
                    .get()
                );
              });

              let usersDTOsToBeUpdated: UserDTO[] = [];

              Promise.all(promises)
                .then((values: [QuerySnapshot<DocumentData[]>]) => {
                  console.log(values);
                  values.forEach((value: QuerySnapshot<DocumentData[]>) => {
                    if (value) {
                      value.forEach((v: DocumentData) => {
                        const data = { ...v.data() };
                        usersDTOsToBeUpdated.push(data);
                      });
                    }
                  });
                })
                .then(() => {
                  usersDTOsToBeUpdated.forEach((user: CustomerDTO) => {
                    const updatedPromos: string[] = user.promos.filter(
                      (p) => p !== promo.pid
                    );

                    const couponsToDel = couponUsers.filter(
                      (u) => u.userId === user.uid
                    );

                    const couponsToDelIds = couponsToDel.map(
                      (u) => u.coupon.id
                    );

                    let newCoupons = [];

                    user.coupons.forEach((uc: string) => {
                      if (!couponsToDelIds.includes(uc)) {
                        newCoupons.push(uc);
                      }
                    });

                    const updatedUser: CustomerDTO = {
                      ...user,
                      promos: updatedPromos,
                      coupons: newCoupons,
                    };

                    const updatedUserPure = Object.assign({}, updatedUser);

                    promises2.push(
                      this.fire
                        .getUsersCollectionRef()
                        .doc(updatedUser.uid)
                        .set({ ...updatedUserPure })
                    );
                  });
                })
                .then(() => {
                  Promise.all(promises2).then((data) => {
                    couponUsers.forEach((cu) => {
                      cu.couponRef.delete();
                    });
                  });
                })
                .then(() => {
                  this.fire.getPromosCollectionRef().doc(promo.pid).delete();
                });
            });
        })
        .catch((err) => console.error(err));
    }
  }

  edit(promo: PromoDTO) {
    this.router.navigate(['promos/edit-promo', { pid: promo.pid }]);
  }
}
