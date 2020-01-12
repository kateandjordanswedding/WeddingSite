import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GettingHereComponent } from './getting-here/getting-here.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { NightBeforeComponent } from './night-before/night-before.component';
import { TheBigDayComponent } from './the-big-day/the-big-day.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { DentonHallAccommodationComponent } from './denton-hall-accommodation/denton-hall-accommodation.component';
import { AlternativeAccommodationComponent } from './alternative-accommodation/alternative-accommodation.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'getting-here', component: GettingHereComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'night-before', component: NightBeforeComponent },
  { path: 'the-big-day', component: TheBigDayComponent },
  { path: 'gift-list', component: GiftListComponent },
  { path: 'denton-hall-accommodation', component: DentonHallAccommodationComponent },
  { path: 'alternative-accommodation', component: AlternativeAccommodationComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
