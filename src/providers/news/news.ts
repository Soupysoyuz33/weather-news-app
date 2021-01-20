import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  //returns an Observable of data from a News API
  getNewsData(country: string, pageSize: number, apiKey: string): Observable<any> {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=" + country + "&pageSize=" + pageSize + "&apiKey=" + apiKey);
  }

}
