import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first, takeUntil} from "rxjs/operators";
import {Actions, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {LoginAdmin} from "../shared/states/auth/login.action";
import {Observable, Subject} from "rxjs";
import {AdminAuthState} from "../shared/states/auth/login.state";
import {User} from "../shared/states/auth/entities/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  private ngUnsubscribe = new Subject();
  // @ts-ignore
  @Select(AdminAuthState.getAdminAuth) currentUser: Observable<User>;
  // @ts-ignore
  currentU: User;
  // @ts-ignore
  errorMsg: string;
  // @ts-ignore
  loginDetail: FormGroup;
  showPwd = false;
  divStyle = 200;
  // @ts-ignore
  fieldTextType: boolean;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private actions$: Actions
  ) {

    this.actions$.pipe(ofActionSuccessful(LoginAdmin),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.isLoading = false;
    });
    // @ts-ignore
    this.currentUser.subscribe(
      (data) => {
        if (data) {
          if (data.email == 'true') {
            this.router.navigate(['/secret']);
          }
        }
      });
  }

  ngOnInit(): any {
    this.loginDetail = this.fb.group({
      email : ['DO N0T L1STEN T0 TH#M', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    });
  }
  ngOnDestroy(): any{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  get f(): any { return this.loginDetail.controls; }

  signIn(): any{
    this.submitted = true;
    if (this.loginDetail.invalid) {
      return;
    }
    this.isLoading = true;
    this.store.dispatch(new LoginAdmin(this.loginDetail.value.email, this.loginDetail.value.pwd))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
          this.errorMsg = error;
          this.isLoading = false;
        });
  }

  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
  }

}
