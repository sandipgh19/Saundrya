import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { Register } from '../register/register';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public loginForm:any;
  email: any;
  password: any;

  constructor(public navCtrl: NavController, public _form:FormBuilder, public menu: MenuController, private loadingCtrl: LoadingController, public http: Http) {

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

  login() {

    console.log(this.email);
    let loader = this.loadingCtrl.create({
      content: "Register..."
    });
    loader.present();
 
    let postParams = JSON.stringify({

      email: this.email,
      password: this.password

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
