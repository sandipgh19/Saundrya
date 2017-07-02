import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  registerPage() {

  this.navCtrl.push(Register)
  }

}
