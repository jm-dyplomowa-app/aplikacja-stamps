import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { updateAuthUserData } from 'src/app/auth/auth.actions';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { ParticipantDTO, PromoDTO } from 'src/app/shared/models/Promo';
import { AnyUserDTO, UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-customer-promos',
  templateUrl: './customer-promos.component.html',
  styleUrls: ['./customer-promos.component.scss'],
})
export class CustomerPromosComponent implements OnInit {
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);
  user: AnyUserDTO = null;
  tableName = 'PROMOCJE W KTÓRYCH UCZESTNICZYSZ';
  sub: Subscription = new Subscription();

  promos$: Observable<DocumentData[]> = this.fire
    .getPromosCollectionRef()
    .valueChanges();

  customerPromos: PromoDTO[] = [];

  constructor(private store: Store<AppState>, private fire: FireService) {
    this.sub.add(
      this.user$.subscribe((data: AnyUserDTO) => {
        this.user = data;

        if (this.user) {
          this.sub.add(
            this.promos$.subscribe((promos: PromoDTO[]) => {
              const customerPromos: PromoDTO[] = promos.filter((promo) => {
                return promo.participantsTable.find(
                  (part) => part.uid === this.user.uid
                );
              });

              this.customerPromos = customerPromos;
            })
          );
        }
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getParticipantPoints(promo: PromoDTO) {
    let participant: ParticipantDTO = promo.participantsTable.find(
      (p) => p.uid === this.user.uid
    );

    return participant.currentPoints;
  }

  resign(promo: PromoDTO, user: UserDTO) {
    if (confirm('Czy na pewno chcesz zrezygnować?')) {
      let resignPromo = this.customerPromos.find(
        (p: PromoDTO) => promo.pid === p.pid
      );

      if (resignPromo) {
        const newPromoParticipants: ParticipantDTO[] =
          resignPromo?.participantsTable?.filter((pt) => pt.uid !== user.uid);

        const newCustomerPromosRefs: string[] = user?.promos?.filter(
          (pr: any) => pr !== promo.pid
        );

        const newPromo = {
          ...resignPromo,
          participantsTable: newPromoParticipants,
          participantsTotal: newPromoParticipants?.length || 0,
        };

        Promise.all([
          this.fire.getPromosCollectionRef().doc(promo.pid).update(newPromo),
          this.fire
            .getUsersCollectionRef()
            .doc(user.uid)
            .update({ promos: newCustomerPromosRefs }),
        ])
          .then((values) => {
            const newUser: AnyUserDTO = {
              ...user,
              promos: newCustomerPromosRefs,
            };
            this.user = newUser;

            this.store.dispatch(updateAuthUserData({ user: user }));
            this.customerPromos = this.customerPromos.filter(
              (cpr) => cpr.pid !== promo.pid
            );
          })
          .catch((e) => console.log(e));
      }
    }
  }
}
