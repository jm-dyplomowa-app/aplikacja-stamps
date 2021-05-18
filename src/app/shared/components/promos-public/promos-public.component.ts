import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { updateAuthUserData } from 'src/app/auth/auth.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { ParticipantDTO, PromoDTO } from 'src/app/shared/models/Promo';
import { AnyUserDTO, CustomerDTO, UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-promos-public',
  templateUrl: './promos-public.component.html',
  styleUrls: ['./promos-public.component.scss'],
})
export class PromosPublicComponent implements OnInit {
  promos$: Observable<
    DocumentData[]
  > = this.fire.getPromosCollectionRef().valueChanges();
  tableName = 'DOSTĘPNE PROMOCJE';
  user$: Observable<AnyUserDTO> = this.store.select(selectAuthUserProfile);
  message = '';
  constructor(
    public auth: AuthService,
    private store: Store<AppState>,
    private fire: FireService
  ) {}

  ngOnInit(): void {}

  hasAlreadyJoined(promo: PromoDTO, user: UserDTO): boolean {
    let alreadyJoined = null;

    alreadyJoined = promo.participantsTable.find((p) => p.uid === user.uid);

    return !!alreadyJoined;
  }

  updateCustomerPromosFirestore(customer: CustomerDTO): Promise<any> {
    return this.fire.getUsersCollectionRef().doc(customer.uid).set(customer);
  }

  updatePromoParticipantsFirestore(promo: PromoDTO): Promise<any> {
    return this.fire.getPromosCollectionRef().doc(promo.pid).set(promo);
  }

  join(promo: PromoDTO, user: AnyUserDTO) {
    this.fire
      .getUsersCollectionRef()
      .doc(user.uid)
      .get()
      .toPromise()
      .then((data) => {
        if (data) {
          const user: AnyUserDTO = data.data() as AnyUserDTO;
          const alreadyJoined = promo.participantsTable.find(
            (participant) => participant.uid === user.uid
          );

          if (!alreadyJoined) {
            const customer: CustomerDTO = this.updateCustomerPromos(
              promo,
              user
            );
            const promoUpdated: PromoDTO = this.updatePromoParticipants(
              promo,
              customer
            );

            const customerPromise: Promise<any> = this.updateCustomerPromosFirestore(
              customer
            );

            const promoPromise: Promise<any> = this.updatePromoParticipantsFirestore(
              promoUpdated
            );

            Promise.all([customerPromise, promoPromise]).then(() => {
              this.store.dispatch(updateAuthUserData({ user: customer }));
            });
          }
        }
      });
  }

  private updatePromoParticipants(promo: PromoDTO, user: UserDTO): PromoDTO {
    const currentPoints = 0 + promo.pointsEntry;

    const newParticipant: ParticipantDTO = {
      uid: user.uid,
      email: user.email,
      currentPoints,
      joinedOn: new Date().toISOString().split('T')[0],
      prizeCounter: 0,
    };

    const participantsTable = [...promo.participantsTable, newParticipant];

    const newPromo: PromoDTO = {
      ...promo,
      participantsTable,
      participantsTotal: participantsTable.length,
    };

    return newPromo;
  }

  private updateCustomerPromos(promo: PromoDTO, user: UserDTO) {
    let promos: string[] = [];
    if (user?.promos.length) {
      promos = [...user?.promos, promo.pid];
    } else {
      promos = [promo.pid];
    }

    const newCustomer: CustomerDTO = Object.assign(
      {},
      {
        ...user,
        promos,
      }
    ) as CustomerDTO;

    return newCustomer;
  }
}
