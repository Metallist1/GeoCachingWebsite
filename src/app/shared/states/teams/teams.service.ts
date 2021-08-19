
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import {Team} from "./entities/team";

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {
    //this.database = firebase.database();
  }
  database: any = null;


  async getSubRatings(): Promise<any> {

  }


  private async firebaseUpdate(path: any, updates: any): Promise<any> {
    const object = {};
    // @ts-ignore
    object[path] = updates;

  /*  await firebase.database()
      .ref()
      .update(object)
      .catch((error: any) => {
        throw new Error(error.message);
      });*/
    return Promise.resolve(undefined);
  }

  async createTeam(specialToken: string, name: string): Promise<any> {
    return {name: name, identifier: specialToken} as Team;
  }
}
