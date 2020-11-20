import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'
import { ErrorHandlerService } from '../../../Shared/error-handler.service';
import { Router } from '@angular/router';

import { CurrencyPurchaseModel } from '../../../Models/currency-purchase-model';
import { CurrencyPurchaseService } from '../../../Services/currency-purchase.service';

@Component({
  selector: 'app-exchange-currency-list',
  templateUrl: './exchange-currency-list.component.html',
  styleUrls: ['./exchange-currency-list.component.css']
})

export class ExchangeCurrencyListComponent implements OnInit {

  public displayedColumns = ['id', 'document','exchangeCurrency', 'description', 'amount', 'exchangeRate', 'subTotal','createDate', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CurrencyPurchaseModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private repoService: CurrencyPurchaseService, 
              private errorService: ErrorHandlerService, 
              private router: Router) { }
 
  ngOnInit() {
    this.GetAllPurchaseCurrency();
  }
 
  public GetAllPurchaseCurrency = () => {
    this.repoService.GetAllPurchaseCurrency()
    .subscribe(res => {
      this.dataSource.data = res as CurrencyPurchaseModel[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 
  public redirectToDetails = (id: string) => {
    let url: string = `/currencyPurchase/details/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToUpdate = (id: string) => {
    let url: string = `/currencyPurchase/update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/currencyPurchase/delete/${id}`;
    this.router.navigate([url]);
  }
}
