import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetNextLocation} from "./location.action";
import {LocationService} from "./location.service";

export class LocationStateModel {
  // @ts-ignore
  cord: string;
  // @ts-ignore
  objective: string;
}

@State<LocationStateModel>({
  name: 'location',
  defaults: {
    cord: '',
    objective: ''
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
  static getLocation(state: LocationStateModel): any {
    return state.objective;
  }

  @Action(GetNextLocation)
  getNextLocation({getState, setState}: StateContext<LocationStateModel>, {string}: GetNextLocation): any {
    // @ts-ignore
    return this.locationService.GetNextLocation(string).then((result) => {
      console.log(result);
      const state = getState();
      setState({
        ...state,
        cord: result.cords,
        objective: result.cords,
      });
    });

  }
}
