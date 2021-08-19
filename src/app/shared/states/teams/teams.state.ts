import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Team} from "./entities/team";
import {CreateTeam} from "./teams.action";

export class TeamsStateModel {
  // @ts-ignore
  team: Team;
}

@State<TeamsStateModel>({
  name: 'team',
  defaults: {
    // @ts-ignore
    team: undefined
  }
})
@Injectable()
export class TeamsState {

  constructor(    private teamService: TeamService,) {
  }

  @Selector()
  static getTeam(state: TeamsStateModel): any {
    return state.team;
  }

  @Action(CreateTeam)
  createTeam({getState, setState}: StateContext<TeamsStateModel>, {specialToken, name}: CreateTeam): any {
    return this.teamService.createTeam(specialToken, name).then((result) => {
      const state = getState();
      setState({
        ...state,
        team: result,
      });
    });

  }
}
