import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {
  AnswerQuestion,
  CheckIfQuestionIsAnswered,
  DeleteQuestion,
  GetNextLocation,
  GetNextQuestion
} from "./location.action";
import {LocationService} from "./location.service";

export class LocationStateModel {
  // @ts-ignore
  cord: string;
  // @ts-ignore
  objective: string;
  // @ts-ignore
  question: string;
  // @ts-ignore
  extra: string;
  // @ts-ignore
  questionAnswerCode: string;
}

@State<LocationStateModel>({
  name: 'location',
  defaults: {
    cord: '',
    objective: '',
    extra: '',
    question: '',
    questionAnswerCode: ''
  }
})
@Injectable()
export class LocationState {

  constructor(    private locationService: LocationService,) {
  }

  @Selector()
  static getCords(state: LocationStateModel): any {
    return state.cord;
  }

  @Selector()
  static getQuestion(state: LocationStateModel): any {
    return state.question;
  }

  @Selector()
  static getExtra(state: LocationStateModel): any {
    return state.extra;
  }

  @Selector()
  static getNextSeriesOfLocations(state: LocationStateModel): any {
    return state.questionAnswerCode;
  }

  @Selector()
  static getLocation(state: LocationStateModel): any {
    return state.objective;
  }

  @Action(GetNextLocation)
  getNextLocation({getState, setState}: StateContext<LocationStateModel>, {string}: GetNextLocation): any {
    // @ts-ignore
    return this.locationService.GetNextLocation(string).then((result) => {
      const state = getState();
      setState({
        ...state,
        cord: result.cords,
        objective: result.objective,
        extra: result.extra
      });
    });

  }

  @Action(GetNextQuestion)
  getNextQuestion({getState, setState}: StateContext<LocationStateModel>, {string}: GetNextQuestion): any {
    // @ts-ignore
    return this.locationService.GetNextQuestion(string).then((result) => {
      const state = getState();
      setState({
        ...state,
        question: result
      });
    });

  }

  @Action(DeleteQuestion)
  deleteQuestion({getState, setState}: StateContext<LocationStateModel>): any {
    // @ts-ignore
      const state = getState();
      setState({
        ...state,
        question: ''
      });
  }

  @Action(AnswerQuestion)
  answerQuestion({getState, setState}: StateContext<LocationStateModel>, {answer, specialToken, questionID}: AnswerQuestion): any {
    return this.locationService.AnswerQuestion(answer, specialToken, questionID).then((result) => {
      console.log(result);
      const state = getState();
      setState({
        ...state,
        questionAnswerCode: result
      });
    });
  }

  @Action(CheckIfQuestionIsAnswered)
  checkIfQuestionIsAnswered({getState, setState}: StateContext<LocationStateModel>, {specialToken, questionID}: CheckIfQuestionIsAnswered): any {
    return this.locationService.CheckIfQuestionIsAnswered(specialToken, questionID).then((result) => {
      const state = getState();
      setState({
        ...state,
        questionAnswerCode: result
      });
    });
  }
}
