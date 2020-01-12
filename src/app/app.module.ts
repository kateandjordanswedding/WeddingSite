import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMobileComponent } from './navigation-mobile/navigation-mobile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GettingHereComponent } from './getting-here/getting-here.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { NightBeforeComponent } from './night-before/night-before.component';
import { TheBigDayComponent } from './the-big-day/the-big-day.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { DentonHallAccommodationComponent } from './denton-hall-accommodation/denton-hall-accommodation.component';
import { AlternativeAccommodationComponent } from './alternative-accommodation/alternative-accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NavigationMobileComponent,
    ContactUsComponent,
    GettingHereComponent,
    AccommodationComponent,
    NightBeforeComponent,
    TheBigDayComponent,
    GiftListComponent,
    DentonHallAccommodationComponent,
    AlternativeAccommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
