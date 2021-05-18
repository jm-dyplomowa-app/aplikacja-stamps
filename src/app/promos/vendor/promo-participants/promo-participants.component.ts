import { Component, Input, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { PromoDTO } from 'src/app/shared/models/Promo';
import { UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-promo-participants',
  templateUrl: './promo-participants.component.html',
  styleUrls: ['./promo-participants.component.scss'],
})
export class PromoParticipantsComponent implements OnInit {
  @Input() tableName = '';
  subscription: Subscription = new Subscription();
  pid: string = null;

  promo: PromoDTO = null;
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);
  promos$: Observable<
    DocumentData[]
  > = this.fire.getPromosCollectionRef().valueChanges();

  constructor(
    private fire: FireService,
    private router: Router,
    public route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.pid = this.route.snapshot.paramMap.get('pid');

    this.subscription.add(
      this.promos$.subscribe((promos) => {
        let foundPromo = promos.find(
          (promo: PromoDTO) => promo.pid === this.pid
        );
        this.promo = foundPromo as PromoDTO;
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
