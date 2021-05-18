import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { CustomerPromoCouponsComponent } from './customer-promo-coupons/customer-promo-coupons.component';
import { CustomerPromosComponent } from './customer-promos/customer-promos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'promos',
        component: CustomerPromosComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['customer'],
        },
      },
      {
        path: 'promo/coupons',
        component: CustomerPromoCouponsComponent,
        canActivate: [AuthGuard],
        data: {
          exptectedRoles: ['customer'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
