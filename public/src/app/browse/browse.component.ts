import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }

  allBikes: object[] = [];
  currentUser:string;
  ngOnInit() {
    this.getAllList();
    this.getCurrentUser()
  }

  getAllList() {
    console.log('Grabbing List!');
    this._httpService.getAllList()
    .then((data)=> {
      console.log('returned Data', data);
      this.allBikes = data;
    })
  }

  onContact(id) {
    console.log(id);
    this._httpService.findMaker(id)
    .then((contact)=> {
      console.log("bike was created by:", contact);
      alert("Name: "+ contact.first_name + " " +contact.last_name +"\nEmail: " + contact.email);
    })
  }

  getCurrentUser() {
    console.log('getCurrentUser()');
    this._httpService.getCurrentUser()
    .then((data)=> {
      this.currentUser = data._id
      console.log("currentuser",data._id)
    })
  }

  onDelete(bike_id) {
    console.log('hit onDelete()', bike_id);
    this._httpService.delete(bike_id)
    .then((data)=> {
      console.log(data);
      this.getAllList();
    })
  }


}
