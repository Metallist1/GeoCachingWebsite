
import { Injectable } from '@angular/core';

import { AngularFireDatabase} from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private db: AngularFireDatabase) {
  }


  GetNextLocation(string: string): any {
    console.log(string);
    return this.db.database
      .ref('/locations/' + string)
      .once('value')
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.val() != null) {
          console.log(snapshot.val());
          const cords = snapshot.val().cords;
          const objective = snapshot.val().objective;
          return {cords, objective} ;
        } else {
          throw new Error('Invalid location');
        }
      });
  }
}
