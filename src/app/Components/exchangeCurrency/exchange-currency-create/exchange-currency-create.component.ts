import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { ErrorHandlerService } from '../../../Shared/error-handler.service';
import { SuccessDialogFormComponent } from '../../../Shared/dialogs/success-dialog-form/success-dialog-form.component';

import { CurrencyPurchaseService } from '../../../Services/currency-purchase.service';
import { ExchangeRateForRetrieve } from 'src/app/Models/exchange-rate-for-retrieve';
import { CurrencyPurchaseCreateModel } from 'src/app/Models/currency-purchase-create-model';

@Component({
  selector: 'app-exchange-currency-create',
  templateUrl: './exchange-currency-create.component.html',
  styleUrls: ['./exchange-currency-create.component.css']
})

export class ExchangeCurrencyCreateComponent implements OnInit {

  private data: any;
  private dialogConfig;
  public dataForm: FormGroup;

  constructor(private location: Location, private repository: CurrencyPurchaseService, 
              private dialog: MatDialog, private errorService: ErrorHandlerService) { }
 
  ngOnInit() {
    this.dataForm = new FormGroup({
      currencyCode: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      idUser: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      amount: new FormControl('', [Validators.required, Validators.maxLength(3)])
    });

    this.dialogConfig = {
      height: '250px',
      width: '500px',
      disableClose: true,
      data: { }
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.dataForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
    // this.dataForm.reset();
  }
 
  public createCurrencyPurchase = (dataFormValue) => {
    if (this.dataForm.valid) {
      this.executeCreateCurrencyPurchase(dataFormValue);
    }
  }
 
  private executeCreateCurrencyPurchase = (dataFormValue) => {
    let data: CurrencyPurchaseCreateModel = {
      idUser: dataFormValue.idUser,
      idExchangeCurrency: dataFormValue.currencyCode,
      amount: dataFormValue.amount
    }

    this.repository.createCurrencyPurchase(data)
      .subscribe(res => {
        console.log('res: ', res);

        this.dialogConfig.data = { successMessage: res}
        let dialogRef = this.dialog.open(SuccessDialogFormComponent, this.dialogConfig);
 
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            console.log('result: ', result);
            this.location.back();
          });
      },
      (error => {
          this.dialogConfig.data = { errorMessage: error}

          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
      })
    )
  }
}
