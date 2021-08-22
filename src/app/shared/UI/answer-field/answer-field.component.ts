import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Actions, ofActionErrored, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {TeamsState} from "../../states/teams/teams.state";
import {Observable, Subject} from "rxjs";
import {Team} from "../../states/teams/entities/team";
import {first, takeUntil} from "rxjs/operators";
import {AnswerQuestion, CheckIfQuestionIsAnswered} from "../../states/location/location.action";
import {LocationState} from "../../states/location/location.state";

@Component({
  selector: 'app-answer-field',
  templateUrl: './answer-field.component.html',
  styleUrls: ['./answer-field.component.scss']
})
export class AnswerFieldComponent implements OnInit {

  selectedOption = 'default';
  // @ts-ignore
  teamForm: FormGroup;
  submitted = false;
  pickedFraze = '';
  answeredQuestion = false;
  // @ts-ignore
  @Select(TeamsState.getTeam) team: Observable<Team>;
  // @ts-ignore
  currentT: Team;
  // @ts-ignore
  @Select(LocationState.getNextSeriesOfLocations) nextLocation: Observable<string>;
  // @ts-ignore
  nextLoc: string;
  // @ts-ignore
  @Input() answerArray: Array[]; // decorate the property with @Input()
  // @ts-ignore
  @Input() question: number; // decorate the property with @Input()
  error = false;
  private ngUnsubscribe = new Subject();

  possibleFrazes = [
    'Answer noted. Good job recruits!',
    'Are you sure ? Okay. Answer noted. Proceed to the next location.',
    '45 72 72 6f 72 2e 20 43 6f 6e 6e 65 63 74 69 6f 6e 20 69 6e 74 65 72 72 75 70 74 65 64 2e',
    'Understood. Proceed to the next location.',
    'Great. Nedas has noted down your answer. Proceed to the next location.',
    'That is an interesting answer... Continue.',
    'I dont think that is correct but proceed to the next location.',
    'Better and better. Go to the next location.',
    'One step closer to the end =). Move faster, dont keep us waiting.',
    'Why are you doing this? How much are they paying yo!@!#!#@#Hfu-IzxGGuQ==',
  ];

  possibleCompletionSecretFrazes = [
    'Good choice =)',
    'I built this website. I can see you. =) - Nedas',
    'You arent good at hiding - Oliver',
    'A curious answer - Danylo',
    'I thought we could trust you - Christian',
    'You will regret this - Mike',
    'I will see you at class - Jeppe',
  ];
  possibleFailSecretFrazes = [
    'Good choice =)',
    'The correct choice. But that does earn you points ;) - Nedas',
    'I knew you can be trusted - Oliver',
    'I knew you seemed bright when you first came here. - Danylo',
    'You still got much to learn. But you can trust me to help you. - Christian',
    'Lets grab a beer tomorrow? - Mike',
    'Looking forward to see what you will build during this year. - Jeppe',
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
          console.log(data);
        }
      });
    // @ts-ignore
    this.nextLocation.subscribe(
      (data) => {
        if (data) {
          this.nextLoc = data;
          console.log(data);
        }
      });
    this.pickFraze();

    this.actions$.pipe(ofActionSuccessful(AnswerQuestion),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.answeredQuestion = true;
    });

    this.actions$.pipe(ofActionSuccessful(CheckIfQuestionIsAnswered),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.answeredQuestion = true;
    });

    this.actions$.pipe(ofActionErrored(AnswerQuestion),
      takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.error = true;
    });

  }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
     });
    this.team.subscribe(
      (data) => {
        if (data) {
          this.currentT = data;
          console.log(data);
          this.teamForm.patchValue({
            email: data.identifier,
          });
        }
      });

    // @ts-ignore
    this.store.dispatch(new CheckIfQuestionIsAnswered(this.teamForm.value.email, this.question))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });
  }

  ngOnDestroy(): any{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get f(): any { return this.teamForm.controls; }

  answerQuestion(): any{
    this.submitted = true;
    if (this.teamForm.invalid) {
      return;
    }
    if(this.question == 9){
      if(this.selectedOption == 'A'){
        this.pickedFraze = this.possibleCompletionSecretFrazes[Math.floor(Math.random() * this.possibleCompletionSecretFrazes.length)];
      }else{
        this.pickedFraze = this.possibleFailSecretFrazes[Math.floor(Math.random() * this.possibleFailSecretFrazes.length)];
      }
    }
    this.store.dispatch(new AnswerQuestion(this.teamForm.value.email, this.selectedOption, this.question))
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
