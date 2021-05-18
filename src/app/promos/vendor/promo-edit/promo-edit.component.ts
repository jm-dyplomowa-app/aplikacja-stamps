import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FireService } from 'src/app/fire.service';
import { AppState } from 'src/app/shared/app-state';
import { PromoDTO } from 'src/app/shared/models/Promo';

@Component({
  selector: 'app-promo-edit',
  templateUrl: './promo-edit.component.html',
})
export class PromoEditComponent implements OnInit {
  promo: PromoDTO = null;
  promos$: Observable<
    DocumentData[]
  > = this.fire.getPromosCollectionRef().valueChanges();
  pid: string = null;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private store: Store<AppState>,
    private fire: FireService
  ) {
    const pid = this.route.snapshot.paramMap.get('pid');
    this.pid = pid;

    this.promos$.subscribe((promos) => {
      let foundPromo = promos.find((promo: PromoDTO) => promo.pid === this.pid);
      this.promo = foundPromo as PromoDTO;
    });
  }

  ngOnInit(): void {}

  userEdit(event) {}
}
