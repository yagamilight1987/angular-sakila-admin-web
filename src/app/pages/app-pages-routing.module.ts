import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LookupComponent } from './lookup/lookup.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'lookup',
        component: LookupComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'film',
        component: FilmComponent
      },
      {
        path: 'actor',
        component: ActorComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPagesRoutingModule {}
