import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GuardService} from "./shared/states/auth/login.guard";
import {SecretQuestionComponent} from "./secret-question/secret-question.component";
import {FirstQuestionComponent} from "./first-question/first-question.component";
import {SecondQuestionComponent} from "./second-question/second-question.component";
import {ThirdQuestionComponent} from "./third-question/third-question.component";
import {ForthQuestionComponent} from "./forth-question/forth-question.component";
import {FifthQuestionComponent} from "./fifth-question/fifth-question.component";
import {SixQuestionComponent} from "./six-question/six-question.component";
import {SevenQuestionComponent} from "./seven-question/seven-question.component";
import {EightQuestionComponent} from "./eight-question/eight-question.component";
import {NineQuestionComponent} from "./nine-question/nine-question.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'SsNMYOl4BX',
    component: FirstQuestionComponent,
  },
  {
    path: 'GHqgKDvvhq',
    component: SecondQuestionComponent,
  },
  {
    path: 'JwGMDh5Pl3',
    component: ThirdQuestionComponent,
  },
  {
    path: 'kAEShKtQiB',
    component: ForthQuestionComponent,
  },
  {
    path: 'tUjT8yLDwj',
    component: FifthQuestionComponent,
  },
  {
    path: 'SL9wBnLdSs',
    component: SixQuestionComponent,
  },
  {
    path: '25bxmMg20a',
    component: SevenQuestionComponent,
  },

  {
    path: '1JbZbIR97U',
    component: EightQuestionComponent,
  },

  {
    path: 'jLXQ8yPLcG',
    component: NineQuestionComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
