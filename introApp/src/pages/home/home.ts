import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlaceProvider } from '../../providers/place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string = "Intro Ionic";
  places: string[] = [];

  constructor(
    public navCtrl: NavController,
    private placeProvider: PlaceProvider
  ) {}

  // https://blog.ionicframework.com/navigating-lifecycle-events/
  // Page LifeCycle events
  ionViewDidLoad() {
    this.placeProvider.getPlaces().then(res => {
      if (!res) res = []; // si res vaut null on remplace par tableau vide
      this.placeProvider.setPlaces(res);
    });
  }

  ionViewDidEnter() {
    this.placeProvider.getPlaces().then(res => {
      this.places = res;
    });
  }

  testBtn() {
    this.message = "J'ai pressé le bouton";
  }

  goToNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

}
