import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqPageComponent } from './shared/components/faq-page/faq-page.component';
import { WrongPageComponent } from './shared/components/wrong-page/wrong-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'promos' },
  { path: 'faq', component: FaqPageComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./promos/promos.module').then((m) => m.PromosModule),
  },
  { path: '**', component: WrongPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
