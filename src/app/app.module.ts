import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularmaterialModule } from './Modules/Material/angularmaterial/angularmaterial.module';

import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ExchangeCurrencyListComponent } from './Components/exchangeCurrency/exchange-currency-list/exchange-currency-list.component';
import { ExchangeCurrencyCreateComponent } from './Components/exchangeCurrency/exchange-currency-create/exchange-currency-create.component';
import { ExchangeRateRetrieveComponent } from './Components/exchangeRate/exchange-rate-retrieve/exchange-rate-retrieve.component';
import { ErrorDialogFormComponent } from './Shared/dialogs/error-dialog-form/error-dialog-form.component';
import { SuccessDialogFormComponent } from './Shared/dialogs/success-dialog-form/success-dialog-form.component';

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ExchangeCurrencyListComponent,
    ExchangeCurrencyCreateComponent,
    ExchangeRateRetrieveComponent,
    ErrorDialogFormComponent,
    SuccessDialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSnackBarModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //{ provide: LocationStrategy, useClass: HashLocationStrategy }
  providers: [],
  entryComponents:[ErrorDialogFormComponent,SuccessDialogFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
