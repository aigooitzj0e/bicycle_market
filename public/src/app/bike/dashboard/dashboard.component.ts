import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser:object = {
    name: "",
    email: ""
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('onInit getCurrentUser');
    this._httpService.getCurrentUser()
  	.then((data)=>{
  		console.log("then");
  		if(data.errors){
  			console.log("failed to find current user");
  			this._router.navigate(['']);
  		}else{
  			console.log("found current user");
	  		this.currentUser = data;
  		}
  	})
  }

  logoff() {
    console.log('logoff()');
    this._httpService.logoff()
    .then((data=> {
      if(data==true){
        this._router.navigate(['']);
      }
      else {
        console.log('error', data);
      }

    }))
  }
}
