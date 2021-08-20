import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {DeleteQuestion, GetNextLocation, GetNextQuestion} from "./location.action";
import {LocationService} from "./location.service";

export class LocationStateModel {
  // @ts-ignore
  cord: string;
  // @ts-ignore
  objective: string;
  // @ts-ignore
  question: string;
}

@State<LocationStateModel>({
  name: 'location',
  defaults: {
    cord: '',
    objective: '',
    question: ''
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
}
