import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/login-model';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private _loginservice;
  LoginModel: LoginModel = new LoginModel();

  constructor(private _Route: Router,public snackBar: MatSnackBar, loginservice: LoginService) { 
    this._loginservice = loginservice;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    localStorage.clear();
  
    // this.LoginModel.Username = "OPERATOR1";
    // this.LoginModel.Password = "123";

    // this._loginservice.validateLoginUser(this.LoginModel).subscribe(
    //   response => 
    //   {     
    //       if (response.token == null && response.usertype == "0") 
    //       {
    //           console.log('Invalid Username and Password');
    //           // this._Route.navigate(['Login']);
    //       }

    //       if (response.usertype == "1") 
    //       {
    //           console.log('Logged in Successfully');
    //           // this._Route.navigate(['/Admin/Dashboard']);
    //       }

    //       if (response.usertype == "2") 
    //       {
    //           console.log('Logged in Successfully');
    //           // this._Route.navigate(['/User/Dashboard']);
    //       }
    //   });

  }

}
