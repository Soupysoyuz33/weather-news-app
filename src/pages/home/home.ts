import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonDisabled = true;
  cityName: string;
  units: string;
  apiID: string = "c271a8463f254da4647457a900490aa6";
  newsApiKey: string = "f0cde67fec134a11b3f8591eb12f6947";
  weather: string[];
  temp: string;
  feels_like: string;
  country: string;
  totalNews: string;
  articles: string[];
  newsButton = true;

  constructor(public navCtrl: NavController, private wp: WeatherProvider, private storage: Storage, private np: NewsProvider) {
  
  }

  ionViewWillEnter() {
    this.storage.get("cityName")
    .then((data) => {
      if (data == null) {
        this.cityName = "Galway";
      } else {
        this.cityName = data;
      }
    })
    .catch((error) => alert("Problem accessing local storage"));
    this.storage.get("units")
    .then((data) => {
      this.units = data;
    })
    .catch((error) => alert("Problem accessing local storage"));
    this.newsButton = true;
  }

  ionViewDidEnter() {
    this.wp.getWeatherData(this.cityName, this.units, this.apiID).subscribe(data => {
      if (data == null) {
        this.cityName = "City not found";
      } else {
        this.weather = data.weather;
        this.temp = data.main.temp;
        this.feels_like = data.main.feels_like;
        this.country = data.sys.country;
        this.buttonDisabled = false;
      }
     });
  }

  getNews() {
    this.newsButton = false;
    this.np.getNewsData(this.country, 5, this.newsApiKey).subscribe(data => {
      this.totalNews = data.totalResults;
      this.articles = data.articles;
   });
  }

  getSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }

}
