import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcomeMesage: string;
  constructor(public navCtrl: NavController) {
    if(localStorage.getItem('user')==null || localStorage.getItem('user')==''){
        this.navCtrl.setRoot(LoginPage);
    }
    this.welcomeMesage=localStorage.getItem('user');
  }
  public Logout(){
    localStorage.setItem("user", "");
    this.navCtrl.setRoot(LoginPage);
  }
}
