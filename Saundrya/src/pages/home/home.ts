import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Register } from '../register/register';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public loginForm:any;
  email: any;

  constructor(public navCtrl: NavController, public _form:FormBuilder, public menu: MenuController) {

    this.menu.enable(false);

  	this.loginForm = this._form.group({

  		
  		"email":["",Validators.required],
  		"password":["",Validators.required]

  	})

  }

  registerPage() {

  let email=this.email


  console.log(email)

  this.navCtrl.push(Register)
  }

   onPageDidEnter() {
      // the left menu should be disabled on the login page
      this.menu.enable(false);
  }

  onPageDidLeave() {
      // enable the left menu when leaving the login page
      this.menu.enable(true);
  }

}
