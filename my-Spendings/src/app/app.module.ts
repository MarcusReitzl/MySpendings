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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { KategorieService } from './kategorie.service';
import { Routes, RouterModule } from '@angular/router';
import { KatSettingsComponent } from './settings/kat-settings/kat-settings.component';
import { BudgetSettingsComponent } from './settings/budget-settings/budget-settings.component';
import { BudgetComponent } from './settings/budget-settings/budget/budget.component';
import { BudgetService } from './budget.service';


const appRoutes: Routes = [
{ path: "", component: MainComponent },
{ path: "bookings", component: BookingsComponent },
{ path: "statistics", component: StatisticsComponent },
{ path: "settings", component: SettingsComponent, children:[
  { path: "categories", component: KatSettingsComponent },
  { path: "budgets", component: BudgetSettingsComponent  },
  { path: "budgets/budget/:id", component: BudgetComponent }
]}];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingsComponent,
    StatisticsComponent,
    SettingsComponent,
    FinanzComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DropdownDirective,
    KatSettingsComponent,
    BudgetSettingsComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [BookingService, KategorieService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
