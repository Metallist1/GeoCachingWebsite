import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actions, ofActionErrored, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {Observable, Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";
import {DeleteQuestion, GetNextLocation, GetNextQuestion} from "../shared/states/location/location.action";
import {LocationState} from "../shared/states/location/location.state";

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @Select(LocationState.getCords) cords: Observable<string>;
  // @ts-ignore
  splits:string[];
  // @ts-ignore
  @Select(LocationState.getLocation) objective: Observable<string>;
  // @ts-ignore
  @Select(LocationState.getExtra) extra: Observable<string>;
  private ngUnsubscribe = new Subject();
  // @ts-ignore
  locationForm: FormGroup;
  // @ts-ignore
  questionForm: FormGroup;
  divStyle = 50;
  // @ts-ignore
  submitted = false;
  showCords = false;

  // @ts-ignore
  @Select(LocationState.getQuestion) question: Observable<string>;
  error = false;
  errorQ = false;

  constructor(    private fb: FormBuilder,
                  private router: Router,
                  private store: Store,
                  private actions$: Actions) {
    this.actions$.pipe(ofActionSuccessful(GetNextLocation),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.showCords = true;
    });
    this.actions$.pipe(ofActionErrored(GetNextLocation),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.showCords = false;
      this.error = true;
    });

    // @ts-ignore
    this.cords.subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.splits = data.split(",");
        }
      });

    // @ts-ignore
    this.question.subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.store.dispatch(new DeleteQuestion())
            .pipe(first())
            .subscribe(
              data => {

              },
              error => {
              });
          this.router.navigate(['/' + data]);
        }
      });

    this.actions$.pipe(ofActionSuccessful(GetNextQuestion),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
    });
    this.actions$.pipe(ofActionErrored(GetNextQuestion),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.errorQ = true;
    });
  }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
    });
    this.questionForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
    });
  }
  ngOnDestroy(): any{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  get f(): any { return this.locationForm.controls; }
  get g(): any { return this.questionForm.controls; }

  getLocation(): any{
    this.submitted = true;
    this.error = false;
    if (this.locationForm.invalid) {
      return;
    }
    this.store.dispatch(new GetNextLocation(this.locationForm.value.email))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });
  }

  getQuestion(): any{
    this.errorQ = false;
    this.submitted = true;
    if (this.questionForm.invalid) {
      return;
    }
    this.store.dispatch(new GetNextQuestion(this.questionForm.value.email))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });
  }
}
