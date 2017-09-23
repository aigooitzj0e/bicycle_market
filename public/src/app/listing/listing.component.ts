import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  myBikes:object[] = []
  user_id: string;

  newBike = {
    title: "",
    price: "",
    location: "",
    description: "",
    image: ""
  }

  thisBike = {
    title: "",
    price: "",
    location: "",
    description: "",
    image:""
  }

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.displayMyBikes();
  }



  createBike() {
    console.log('createBike form submitted!');
    this._httpService.createBike(this.newBike)
    .then((data)=> {
      console.log("returned data from backend", data);
      if(data.errors) {
        console.log('errors!', data.errors);
      }
      else {
        console.log('Bike listing successfully created!');
        this.displayMyBikes();
      }
    })
  }

  displayMyBikes() {
    console.log('displaymyBikes()');
    this._httpService.displayMyBikes()
    .then((data)=> {
      console.log(data);
      this.myBikes = data;
    })
  }

  onUpdate(i) {
    console.log("i", i);
    console.log('onUpdate()', this.myBikes[i]);
    this._httpService.update(this.myBikes[i])
    .then((data)=> {
      console.log(data);
    })
  }

  onDestroy(i) {
    console.log('i', i);
    this._httpService.destroy(this.myBikes[i])
    .then((data)=> {
      this.displayMyBikes();
    })
  }

}
