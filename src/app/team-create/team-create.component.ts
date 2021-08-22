import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Actions, ofActionErrored, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {first, takeUntil} from "rxjs/operators";
import {CreateTeam} from "../shared/states/teams/teams.action";
import {AdminAuthState} from "../shared/states/auth/login.state";
import {Observable, Subject} from "rxjs";
import {User} from "../shared/states/auth/entities/user";
import {Team} from "../shared/states/teams/entities/team";
import {TeamsState} from "../shared/states/teams/teams.state";
import {GetNextLocation} from "../shared/states/location/location.action";

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit, OnDestroy {
  isLoading = false;
  // @ts-ignore
  teamForm: FormGroup;
  showPwd = false;
  divStyle = 200;
  submitted = false;
  pickedFraze = '';
  createdTeam = false;
  // @ts-ignore
  @Select(TeamsState.getTeam) team: Observable<Team>;
  // @ts-ignore
  currentT: Team;
  error = false;
  private ngUnsubscribe = new Subject();

  possibleFrazes = [
    'Waiting for something to happen?',
    'Young ones. Stay determined...',
    'I wonder why there a bunch of glitched letters in the questions.',
    'Stubbornness, son! It hardens in response to mental pressure. You cant hurt me, Angular!',
    'Try EASV. Coulda gone pro if We didnt join Computer Science. We are not one of those beltway pansies. We could break Bill Gates in two with our bare hands! DONT FUCK WITH THESE DEVELOPERS!',
    'Boss... You fixed a bug? AMAZING Mission complete! THAT right there is why youre the best Boss. The one and only!',
    'The wrong developer in the right place can make all the difference in the world.',
    '- Chief, You Mind Telling Me What Youre Doing on That App? - Sir. Fixing this bug. ',
    'Had to be us. Someone else might have gotten it wrong.',
    '16x the amount of bugs',
    'Against all the bugs that hell can conjure, all the broken code that mankind can produce. We’ll send unto them, only you. Fix and Refactor until it is done',
    'Professionalism isnt an art, its a habit. We are what we repeatedly do.',
    'No amount of talent can compete with a hard working man. Always try to find ways to improve.',
    'Once more the developers shall fix the broken code, and we shall have peace.',
    'It’s over bug! I have the High Ground!',
    'Remind yourself that overconfidence is a slow and insidious killer.',
    'Doing unit tests almost makes us wish for a nuclear winter.',
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions) {
    // @ts-ignore
    this.team.subscribe(
      (data) => {
        if (data) {
          this.currentT = data;
          this.createdTeam = true;
        }
      });
    this.pickFraze();

    this.actions$.pipe(ofActionSuccessful(CreateTeam),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
    });
    this.actions$.pipe(ofActionErrored(CreateTeam),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.error = true;
    });
  }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      pwd : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    });
  }

  ngOnDestroy(): any{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get f(): any { return this.teamForm.controls; }

  createTeam(): any{
    this.submitted = true;
    if (this.teamForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.store.dispatch(new CreateTeam(this.teamForm.value.email, this.teamForm.value.pwd))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });
  }

  pickFraze(): any{
    this.pickedFraze = this.possibleFrazes[Math.floor(Math.random() * this.possibleFrazes.length)];
  }
}
