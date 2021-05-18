import { NgModule } from '@angular/core';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth.routing-module';
import { AuthService } from './auth.service';

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuthReducer from './auth.reducer';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [LogInComponent, RegisterComponent, ProfilePageComponent];
@NgModule({
  declarations: components,
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromAuthReducer.featureKey, fromAuthReducer.reducer),
  ],
  exports: components,
  providers: [AuthService],
})
export class AuthModule {}
