import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

	public registrationForm:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form:FormBuilder) {

  	this.registrationForm = this._form.group({

  		"name":["",Validators.required],
  		"email":["",Validators.required],
  		"password":["",Validators.required],
  		"mobile":["",Validators.required],
  		"street":["",Validators.required],
  		"city":["",Validators.required],
  		"zip":["",Validators.required],
  		"state":["",Validators.required]

  	})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
