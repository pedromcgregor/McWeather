import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// The response from the server is an Observable, thats why we use map.
// where every we request this data we need to subscribe to get the data

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

 
}
