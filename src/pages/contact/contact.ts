import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
    if(localStorage.getItem('user')==null || localStorage.getItem('user')==''){
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
