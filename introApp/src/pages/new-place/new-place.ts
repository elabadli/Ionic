import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PlaceProvider } from '../../providers/place/place';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  place: string = '';
  coords = {lat: 0, long: 0};

  constructor(
    public navCtrl: NavController,
    private placeProvider: PlaceProvider,
    private geolocation: Geolocation,
    private alertCtrl: AlertController
  ) {}

  private showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: 'Geolocation',
      buttons: ['OK']
    });
    alert.present();
  }

  savePlace(f) {
    console.log(this.placeProvider.addPlace(f.value.place));
    this.navCtrl.pop(); // retour à la page précédente
  }

  locate() {
    this.showAlert();
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.long = res.coords.longitude;
    })
  }
}
