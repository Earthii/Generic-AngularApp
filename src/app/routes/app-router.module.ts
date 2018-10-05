import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared.module';

import { HomeComponent } from './../home/home.component';
import { PageNotFoundComponent } from '../pageNotFound/pageNotFound.component';

const appRoutes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '404', name: 'Not Found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {}

export const routingComponents = [HomeComponent, PageNotFoundComponent];
