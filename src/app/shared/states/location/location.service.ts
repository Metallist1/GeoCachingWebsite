
import { Injectable } from '@angular/core';

import { AngularFireDatabase} from '@angular/fire/database';
import {Team} from "../teams/entities/team";
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private db: AngularFireDatabase) {
  }


  GetNextLocation(string: string): any {
    return this.db.database
      .ref('/locations/' + string)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() != null) {
          const cords = snapshot.val().cords;
          const objective = snapshot.val().objective;
          return {cords, objective} ;
        } else {
          throw new Error('Invalid location');
        }
      });
  }

  GetNextQuestion(string: string): any {
    return this.db.database
      .ref('/questions/' + string)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() != null) {
          return  snapshot.val().question;
        } else {
          throw new Error('Invalid Question');
        }
      });
  }


  async AnswerQuestion(answer: string, specialToken: string, questionID: number): Promise<any> {
    await this.checkIfTeamExists(specialToken);
    const isAnswered = await this.CheckIfQuestionIsAnsweredLocal(specialToken, questionID);
    if(isAnswered == undefined){
      console.log('recordanswer');
      await this.RecordAnswer(answer, specialToken , questionID);
    }
    return await this.getNextLocation(specialToken, questionID);
  }

  async CheckIfQuestionIsAnsweredLocal(specialToken: string, questionID: number): Promise<any> {
    const snapshot = await this.db.database.ref('/teams/'+specialToken+ '/questions/'+ questionID).once('value');
    if (snapshot.val() !== null) { // If there is a result
      return (snapshot.val().answer === null) ? '' : snapshot.val().answer;
    }else {
      throw new Error('Invalid Question');
    }
  }

  async CheckIfQuestionIsAnswered(specialToken: string, questionID: number): Promise<any> {
    const snapshot = await this.db.database.ref('/teams/'+specialToken+ '/questions/'+ questionID).once('value');
    if (snapshot.val() !== null ) { // If there is a result
      if(snapshot.val().answer !== null) {
        return await this.getNextLocation(specialToken, questionID)
      }else {
        throw new Error('Invalid Question');
      }
    }else {
      throw new Error('Invalid Question');
    }
  }

  async RecordAnswer(answer: string, specialToken: string, questionID: number): Promise<any> {
   return await this.db
      .database
      .ref('/teams/' + specialToken + '/questions/'+ questionID + '/answer')
      .set(answer)
      .catch((error) => {
        console.log(error.message);
        throw new Error(error.message);
      });
  }

  async checkIfTeamExists(specialToken: string): Promise<any> {
    const snapshot = await this.db.database
      .ref('/teams/' + specialToken)
      .once('value');
    if (snapshot.val() != null) {
      return true;
    } else {
      throw new Error('Invalid team');
    }
  }

  async getNextLocation(specialToken: string,questionID: number): Promise<any> {
     const locationList = await this.getLocationList();
     const teamQuestionList = await this.getTeamQuestions(specialToken);
     //Length starts always at 1. But array starts at 0.
     // We take -1 from length to get the current team questions id.
     // We ID ofc starts from 1 . So -1 = 0 which is the current question in location list.
    const value = Number(teamQuestionList[teamQuestionList.length - 1].id) -1;
    const compareVal = Number(teamQuestionList[teamQuestionList.length - 1].id);
     if(teamQuestionList.length>=8){
       return 'Great job. Mission complete. Go back to EASV.'
     }
     if(compareVal < 8){
       const newNumber = Number(locationList[value].id) - 1
       return 'Next location code: ' +locationList[newNumber].nextLocation;
     }
     if(compareVal == 8){
       for (let i = 0; i < teamQuestionList.length; i++) {
         if(locationList[i].id != teamQuestionList[i].id){
           if(i == 0){
             return 'Next location code: ' + locationList[7].nextLocation;
           }else{
             return 'Next location code: ' + locationList[i-1].nextLocation;
           }
         }
       }
     }
  }

  async getLocationList(): Promise<any> {
    const snapshot = await this.db.database
      .ref('/questions/')
      .once('value');
    // @ts-ignore
    const list = [];
    if (snapshot.val() != null) {
      await snapshot.forEach((child) => {
        const id = child.val().id;
        const nextLocation = child.val().nextLocation;
        const question = child.val().question;

        const location = {
          id,
          nextLocation,
          question,
        };
        list.push(location);
      });
      // @ts-ignore
      await list.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    // @ts-ignore
    return list;
  }

  async getTeamQuestions(specialToken: string): Promise<any> {
    const snapshot = await this.db.database
      .ref('/teams/'+specialToken+ '/questions/')
      .once('value');
    // @ts-ignore
    const list = [];
    if (snapshot.val() != null) {
      await snapshot.forEach((child) => {
        const id = child.key;
        if(child.val().answer !== undefined){
          const answer = child.val().answer;

          const location = {
            id,
            answer
          };
          list.push(location);
        }
      });
      // @ts-ignore
      await list.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    // @ts-ignore
    return list;
  }

}
