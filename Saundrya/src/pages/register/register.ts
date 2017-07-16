import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


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
  name: any;
  email: any;
  password: any;
  mobile: any;
  street: any;
  city: any;
  zip: any;
  state: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form:FormBuilder, private loadingCtrl: LoadingController, public http: Http) {

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

  register() {

  console.log(this.email);
    let loader = this.loadingCtrl.create({
      content: "Register..."
    });
    loader.present();
 
    let postParams = JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      mobile: this.mobile,
      street: this.street,
      city: this.city,
      zip: this.zip,
      state: this.state

    });
    
    this.http.post("", postParams).map(res => res.json())
      .subscribe(data => {
        console.log(data['_body']);
        console.log(data.message);
        loader.dismiss();
        alert(data.message);
       }, error => {
        console.log(error);// Error getting the data
      });


  }

}
