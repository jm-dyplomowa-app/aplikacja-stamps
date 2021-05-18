import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FireService } from './fire.service';
import { PromosModule } from './promos/promos.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    SharedModule,
    AuthModule,

    PromosModule,
    AngularFireModule.initializeApp(environment.firebase, 'cloud'),
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [FireService],
})
export class AppModule {}
