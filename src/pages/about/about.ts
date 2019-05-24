import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    debugger;
    if(localStorage.getItem('user')===null || localStorage.getItem('user')===''){
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
