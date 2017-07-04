import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public loginForm:any;

  constructor(public navCtrl: NavController, public _form:FormBuilder) {

  	this.loginForm = this._form.group({

  		
  		"email":["",Validators.required],
  		"password":["",Validators.required]

  	})

  }

  registerPage() {

  this.navCtrl.push(Register)
  }

}
