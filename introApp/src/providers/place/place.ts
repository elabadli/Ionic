import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlaceProvider {

  places: string[] = [];

  constructor(private storage: Storage) {}

  // getPlaces(): string[] {
  //   return this.places;
  // }

  setPlaces(places: string[]) {
    this.places = places;
  }

  getPlaces(): any {
    return this.storage.get('places'); // renvoie Promise
  }

  addPlace(place: string) {
    this.places.push(place);
    this.storage.set('places', this.places);

    // TOTALEMENT OPTIONNEL
    return this.places.slice(); // renvoie une copie du tableau
  }

}
