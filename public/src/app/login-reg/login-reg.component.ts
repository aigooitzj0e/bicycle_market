import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  user:object = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: ""
  }
  loginUser:object = {
    email: '',
    password: '',
  }

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }


  onLogin() {
    console.log('onLogin()');
    this._httpService.login(this.loginUser)
    .then((data)=> {
      console.log('onLogin()');
      if(data.errors) {
        console.log('returned from backend', data);
      }
      else {
        console.log('Successful Logged IN!');
        this._router.navigate(['dashboard']);
      }
    })
  }

  onReg() {
    console.log('onReg()');
    this._httpService.register(this.user)
    .then((data) => {
      console.log('return from backend', data)
      if(data.errors) {
        console.log('Error', data.errors);
      }
      else {
        console.log('Registered Successfully');
        this._router.navigate(['dashboard']);
      }
    })
  }
}
