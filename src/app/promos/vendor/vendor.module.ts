import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { GenerateCouponComponent } from './generate-coupon/generate-coupon.component';
import { PromoAddComponent } from './promo-add/promo-add.component';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { PromoParticipantsComponent } from './promo-participants/promo-participants.component';
import { VendorPromosComponent } from './vendor-promos/vendor-promos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GivePrizeComponent } from './give-prize/give-prize.component';

const components = [
  GenerateCouponComponent,
  PromoAddComponent,
  PromoEditComponent,
  PromoParticipantsComponent,
  VendorPromosComponent,
  GivePrizeComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: components,
})
export class VendorModule {}
