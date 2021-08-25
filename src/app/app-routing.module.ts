import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GuardService} from "./shared/states/auth/_guard/login.guard";
import {SecretQuestionComponent} from "./questions/secret-question/secret-question.component";
import {FirstQuestionComponent} from "./questions/first-question/first-question.component";
import {SecondQuestionComponent} from "./questions/second-question/second-question.component";
import {ThirdQuestionComponent} from "./questions/third-question/third-question.component";
import {ForthQuestionComponent} from "./questions/forth-question/forth-question.component";
import {FifthQuestionComponent} from "./questions/fifth-question/fifth-question.component";
import {SixQuestionComponent} from "./questions/six-question/six-question.component";
import {SevenQuestionComponent} from "./questions/seven-question/seven-question.component";
import {EightQuestionComponent} from "./questions/eight-question/eight-question.component";
import {IntroComponent} from "./intro/intro.component";
import {TeamCreateComponent} from "./team-create/team-create.component";
import {QuestionViewComponent} from "./question-view/question-view.component";

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'teams',
    component: TeamCreateComponent,
  },
  {
    path: 'questions',
    component: QuestionViewComponent,
  },
  {
    path: 'IKNOWTHETRUTH',
    component: LoginComponent,
  },
  {
    path: '6TI5J',
    component: FirstQuestionComponent,
  },
  {
    path: 'ISAH5',
    component: SecondQuestionComponent,
  },
  {
    path: 'MJB4Z',
    component: ThirdQuestionComponent,
  },
  {
    path: 'CKOMP',
    component: ForthQuestionComponent,
  },
  {
    path: 'BYM6K',
    component: FifthQuestionComponent,
  },
  {
    path: 'HD1A5',
    component: SixQuestionComponent,
  },
  {
    path: '2I7P6',
    component: SevenQuestionComponent,
  },
  {
    path: 'BDVT0',
    component: EightQuestionComponent,
  },
  {
    path: 'secret',
    component:  SecretQuestionComponent,
    canActivate: [GuardService]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
