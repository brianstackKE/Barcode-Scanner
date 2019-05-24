import { Component, NgModule } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading,ToastController  } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AuthService]
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {grant_type: 'password', username: '', password: '' };
  data: any;
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController,
     private toastCtrl: ToastController) { }
 
  public createAccount() {
    //this.nav.push('RegisterPage');
    this.nav.setRoot(RegisterPage);
  }
 
  public login() {
    this.showLoading()
debugger;
    
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {   
        localStorage.setItem('user', 'Jitendra Dubey');     
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    //alert.present('');
  }
}
