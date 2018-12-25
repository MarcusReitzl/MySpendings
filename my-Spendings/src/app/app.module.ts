import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookingsComponent } from './bookings/bookings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { FinanzComponent } from './finanz/finanz.component';
import { MainComponent } from './main/main.component';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingsComponent,
    StatisticsComponent,
    SettingsComponent,
    FinanzComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
