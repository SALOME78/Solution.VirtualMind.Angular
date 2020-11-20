import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-error-dialog-form',
  templateUrl: './error-dialog-form.component.html',
  styleUrls: ['./error-dialog-form.component.css']
})
export class ErrorDialogFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrorDialogFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
 
  ngOnInit() {
  }
 
  public closeDialog = () => {
    this.dialogRef.close();
  }

}
