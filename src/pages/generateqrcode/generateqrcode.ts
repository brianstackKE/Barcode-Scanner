import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the GenerateqrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generateqrcode',
  templateUrl: 'generateqrcode.html',
})
export class GenerateqrcodePage {
  qrData=null;
  createdCode=null;
  scannedCode=null;
  constructor(public navCtrl: NavController,private barCodeScanner:BarcodeScanner) {
    if(localStorage.getItem('user')==null || localStorage.getItem('user')==''){
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateqrcodePage');
  }

  createCode(){
    this.createdCode=this.qrData;
    console.log(this.createdCode);
  }
  scanCode(){
    this.barCodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
  }
}
