
import { Injectable } from '@angular/core';

import {Team} from "./entities/team";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private db: AngularFireDatabase) {

  }


  async createTeam(specialToken: string, name: string): Promise<any> {
    await this.db.database
      .ref('/teams/' + specialToken)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() != null) {
          this.updateFirebase(name, specialToken, snapshot.val().questions);
          return {name: name, identifier: specialToken} as Team ;
        } else {
          throw new Error('Invalid location');
        }
      });
    return {name: name, identifier: specialToken} as Team;
  }

  updateFirebase( name: string,specialToken: string , questions: any): any {
    const data = {
      name,
      questions
    };
    console.log(data);
    this.db
      .database
      .ref('/teams/' + specialToken)
      .update(data)
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
