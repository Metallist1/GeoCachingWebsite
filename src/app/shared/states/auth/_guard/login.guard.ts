import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AdminAuthState} from "../login.state";
import {Observable} from "rxjs";
import {User} from "../entities/user";
import {Select} from "@ngxs/store";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  // @ts-ignore
  @Select(AdminAuthState.getAdminAuth) currentUser: Observable<User>;
  // @ts-ignore
  currentU: User;
  constructor( private router: Router) {
    // @ts-ignore
    this.currentUser.subscribe(
      (data) => {
        this.currentU = data;
      });
  }

  canActivate() {
    if (this.currentU) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/']);
    return false;
  }
}
