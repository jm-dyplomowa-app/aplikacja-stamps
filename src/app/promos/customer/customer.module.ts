import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerPromosComponent } from './customer-promos/customer-promos.component';
import { CustomerPromoCouponsComponent } from './customer-promo-coupons/customer-promo-coupons.component';

@NgModule({
  declarations: [CustomerPromosComponent, CustomerPromoCouponsComponent],
  imports: [CommonModule, CustomerRoutingModule],
  exports: [CustomerPromosComponent, CustomerPromoCouponsComponent],
})
export class CustomerModule {}
