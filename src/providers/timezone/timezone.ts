import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TimezoneProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TimezoneProvider {

  apikey = 'AIzaSyA2PKVctrwzHiwkhCHAFmGoX_bctECOA2s';
  url2 = 'https://maps.googleapis.com/maps/api/timezone/json?';

  //https://maps.googleapis.com/maps/api/timezone/json?
  //location=39.6034810,-119.6822510&timestamp=1331161200&key=YOUR_API_KEY


  constructor(public http: Http) {
    console.log('Hello TimezoneProvider Provider');
  }

  getTime(city, state){
    return ("time")
  }

}
