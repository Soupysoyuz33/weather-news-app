import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  cityName:string;
  units: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }
  

  saveButton(){
    this.storage.set("cityName", this.cityName);
    this.storage.set("units", this.units);
    this.navCtrl.pop();
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
  }

}
