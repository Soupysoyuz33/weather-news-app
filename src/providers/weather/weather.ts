import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  //Returns the data as an Observable from a Weather API
  getWeatherData(cityName: string, units: string, apiID: string): Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units="+ units + "&appid=" + apiID);
  }

}
