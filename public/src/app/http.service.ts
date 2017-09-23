import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  register(user) {
    console.log('user received from onReg()', user);
    return this._http.post('/api/users', user)
    .map(Response=>Response.json())
    .toPromise();
  }

  login(user) {
    console.log('hit login() service', user);
    return this._http.post('/api/login', user)
    .map(Response => Response.json())
    .toPromise();
  }

  getCurrentUser() {
    console.log('hit getCurrentUser() in service');
    return this._http.get('/api/users/current')
    .map(Response=> Response.json())
    .toPromise();
  }

  createBike(bike) {
    console.log('hit createBike service');
    return this._http.post('api/dashboard/create', bike)
    .map(Response=> Response.json())
    .toPromise();
  }

  getAllList() {
    console.log('hit getAllList() in service');
    return this._http.get('/api/dashboard')
    .map(Response=> Response.json())
    .toPromise();
  }

  findMaker(user_id) {
    console.log('hit findMaker() in service');
    return this._http.post('/api/dashboard/findMaker', {user_id:user_id})
    .map(Response=> Response.json())
    .toPromise();
  }

  displayMyBikes() {
    console.log('Hit displayMyBikes service');
    return this._http.get('/api/dashboard/displayMyBikes')
    .map(Response=> Response.json())
    .toPromise();
  }

  logoff() {
    console.log('hit logoff service!');
    return this._http.get('/api/logoff')
    .map(Response=> Response.json())
    .toPromise();
  }

  update(updatedBike) {
    console.log('update in service');
    return this._http.post('/api/dashboard/update', updatedBike)
    .map(Response=> Response.json())
    .toPromise();
  }

  destroy(bike) {
    console.log('hit destroy in service');
    return this._http.put('/api/destroy', bike)
    .map(Response=> Response.json())
    .toPromise();
  }

  delete(bike_id) {
    console.log('hit destroy in service');
    return this._http.put('/api/delete', {bike_id : bike_id})
    .map(Response=> Response.json())
    .toPromise();
  }

}
