import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog-form',
  templateUrl: './success-dialog-form.component.html',
  styleUrls: ['./success-dialog-form.component.css']
})
export class SuccessDialogFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccessDialogFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
