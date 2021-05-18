import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { GenerateCouponComponent } from './generate-coupon/generate-coupon.component';
import { GivePrizeComponent } from './give-prize/give-prize.component';
import { PromoAddComponent } from './promo-add/promo-add.component';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { PromoParticipantsComponent } from './promo-participants/promo-participants.component';
import { VendorPromosComponent } from './vendor-promos/vendor-promos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'promos',
        component: VendorPromosComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },
      {
        path: 'promos/add',
        component: PromoAddComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },

      {
        path: 'promo/edit/:pid',
        component: PromoEditComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },

      {
        path: 'promo/participants/:pid',
        component: PromoParticipantsComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },

      {
        path: 'promo/generate-coupon',
        component: GenerateCouponComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },

      {
        path: 'promo/give-prize',
        component: GivePrizeComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['vendor'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule {}
