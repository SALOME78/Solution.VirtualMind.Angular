import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCurrencyCreateComponent } from './Components/exchangeCurrency/exchange-currency-create/exchange-currency-create.component';
import { ExchangeCurrencyListComponent } from './Components/exchangeCurrency/exchange-currency-list/exchange-currency-list.component';
import { ExchangeRateRetrieveComponent } from './Components/exchangeRate/exchange-rate-retrieve/exchange-rate-retrieve.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'exchangeRateRetrieve',
    component: ExchangeRateRetrieveComponent
  },
  {
    path: 'currencyPurchaseList',
    component: ExchangeCurrencyListComponent
  },
  {
    path: 'currencyPurchaseCreate',
    component: ExchangeCurrencyCreateComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

//,
//{ useHash: true }

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
