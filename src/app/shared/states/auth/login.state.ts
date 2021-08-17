import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "./user";
import {Injectable} from "@angular/core";
import {LoginAdmin} from "./login.action";

export class AdminAuthStateModel {
  // @ts-ignore
  adminUser: User;
}

@State<AdminAuthStateModel>({
  name: 'AdminAuth',
  defaults: {
    // @ts-ignore
    adminUser: undefined
  }
})
@Injectable()
export class AdminAuthState {
  hiddenPassword = 'bugfixing'
  constructor() {
  }

  @Selector()
  static getAdminAuth(state: AdminAuthStateModel): any {
    return state.adminUser;
  }

  @Action(LoginAdmin)
  loginAdmin({getState, setState}: StateContext<AdminAuthStateModel>, {username, password}: LoginAdmin): any {
    if(password.toLowerCase() == this.hiddenPassword){
      const state = getState();
      setState({
        ...state,
        adminUser: {email: 'true'},
      });
    }
  }
}
