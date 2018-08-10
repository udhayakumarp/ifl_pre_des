import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ActivityComponent } from './activity/activity.component';
import { PrecasesComponent } from './precases/precases.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewPreComponent } from './view-pre/view-pre.component';
import { ExistingComponent } from './existing/existing.component';
import { NewUserComponent } from './new-user/new-user.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { PitchComponent } from './pitch/pitch.component';
import { ProductsComponent } from './products/products.component';
import { RecommendMainComponent } from './recommend-main/recommend-main.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { MyDatePickerModule } from 'mydatepicker';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatSliderModule} from '@angular/material/slider';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';



// Route Configuration
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'activity', component: ActivityComponent },
  { path: 'precases', component: PrecasesComponent },
  { path: 'viewPre', component: ViewPreComponent },
  { path: 'existing', component: ExistingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'NewUser', component: NewUserComponent },
  {path: 'Questionnaire', component: QuestionnaireComponent},
  {path: 'RecommendMain', component: RecommendMainComponent},
  {path: 'Demographics', component: DemographicsComponent},
  {path: 'Pitch', component: PitchComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'BuyNow', component: BuyNowComponent },
  {path: 'GetQuote', component: GetQuoteComponent },
  {path: 'QuoteDetails', component:  QuoteDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ActivityComponent,
    PrecasesComponent,
    SettingsComponent,
    ViewPreComponent,
    ExistingComponent,
    NewUserComponent,
    QuestionnaireComponent,
    DemographicsComponent,
    PitchComponent,
    ProductsComponent,
    RecommendMainComponent,
    BuyNowComponent,
    GetQuoteComponent,
    QuoteDetailsComponent,
    PdfViewerComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes),
    Ng4GeoautocompleteModule.forRoot(),
    MatDialogModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
