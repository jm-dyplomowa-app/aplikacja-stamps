import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrongPageComponent } from './components/wrong-page/wrong-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { FireService } from '../fire.service';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { PromoFormComponent } from './components/promo-form/promo-form.component';
import { PromosPublicComponent } from './components/promos-public/promos-public.component';

const components = [
  WrongPageComponent,
  NavbarComponent,
  FaqPageComponent,
  PromoFormComponent,
  PromosPublicComponent,
];

@NgModule({
  declarations: components,

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase, 'cloud'),
  ],
  exports: components,
  providers: [],
})
export class SharedModule {}
