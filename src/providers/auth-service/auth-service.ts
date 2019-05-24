//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, RequestMethod} from '@angular/http';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://localhost:54063/';
@Injectable()
export class AuthService {
  currentUser: User;
  constructor(public http: Http) {}
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return new Promise((resolve, reject) => {
        var body=JSON.stringify(credentials);
        let headerOptions = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        var requestOption =new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
        this.http.post('http://localhost:54063/Token',body,requestOption).map(x=>x.json()).toPromise();
      });

      /*return Observable.create((observer: { next: (arg0: boolean) => void; complete: () => void; }) => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });*/
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}