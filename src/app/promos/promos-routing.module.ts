import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromosPublicComponent } from '../shared/components/promos-public/promos-public.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'promos',
        pathMatch: 'full',
        component: PromosPublicComponent,
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'vendor',
        loadChildren: () =>
          import('./vendor/vendor.module').then((m) => m.VendorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromosRoutingModule {}
