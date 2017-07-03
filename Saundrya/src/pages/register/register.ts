import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  this.http = http;

  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  register() {

  var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    
    this.http.post("http://sandip.com/", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

}
