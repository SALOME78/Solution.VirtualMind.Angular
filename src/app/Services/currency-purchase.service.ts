import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExchangeCurrencyModel } from '../Models/exchange-currency-model';

@Injectable({
  providedIn: 'root'
})

export class CurrencyPurchaseService {

  private data: any;
  private apiUrl = environment.apiEndpoint + "/api/CurrencyPurchase/";
  // token: any;
  // username: any;

  constructor(private http: HttpClient) {
    // this.data = JSON.parse(localStorage.getItem('AdminUser'));
    // this.token = this.data.token;
    // this.username = this.data.username
  }

  // Get All GetAllPurchaseCurrency
  public GetAllPurchaseCurrency() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<any[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
        catchError(this.handleError)
    );
  }

  // Post createCurrencyPurchase
  public createCurrencyPurchase(dataModel: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.post<any>(this.apiUrl, dataModel, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later! ' + error.error.Message);
  };

}
