import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretQuestionComponent } from './questions/secret-question/secret-question.component';
import {NgxsModule} from "@ngxs/store";
import {AdminAuthState} from "./shared/states/auth/login.state";
import {environment} from "../environments/environment";
import { FirstQuestionComponent } from './questions/first-question/first-question.component';
import { SecondQuestionComponent } from './questions/second-question/second-question.component';
import { ThirdQuestionComponent } from './questions/third-question/third-question.component';
import { ForthQuestionComponent } from './questions/forth-question/forth-question.component';
import { FifthQuestionComponent } from './questions/fifth-question/fifth-question.component';
import { SixQuestionComponent } from './questions/six-question/six-question.component';
import { SevenQuestionComponent } from './questions/seven-question/seven-question.component';
import { EightQuestionComponent } from './questions/eight-question/eight-question.component';
import {AngularFireModule} from "@angular/fire";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {TeamsState} from "./shared/states/teams/teams.state";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IntroComponent } from './intro/intro.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import {LocationState} from "./shared/states/location/location.state";
import { QuestionViewComponent } from './question-view/question-view.component';
import { AnswerFieldComponent } from './shared/UI/answer-field/answer-field.component';
import { FirstLinksComponent } from './links/first-links/first-links.component';
import { SecondLinksComponent } from './links/second-links/second-links.component';
import { ThirdLinksComponent } from './links/third-links/third-links.component';
import { ForthLinksComponent } from './links/forth-links/forth-links.component';
import { FifthLinksComponent } from './links/fifth-links/fifth-links.component';
import { SixLinksComponent } from './links/six-links/six-links.component';
import { SevenLinksComponent } from './links/seven-links/seven-links.component';
import { EightLinksComponent } from './links/eight-links/eight-links.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecretQuestionComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    ForthQuestionComponent,
    FifthQuestionComponent,
    SixQuestionComponent,
    SevenQuestionComponent,
    EightQuestionComponent,
    NavBarComponent,
    IntroComponent,
    TeamCreateComponent,
    QuestionViewComponent,
    AnswerFieldComponent,
    FirstLinksComponent,
    SecondLinksComponent,
    ThirdLinksComponent,
    ForthLinksComponent,
    FifthLinksComponent,
    SixLinksComponent,
    SevenLinksComponent,
    EightLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,

    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxsModule.forRoot([AdminAuthState, TeamsState, LocationState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['team']
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
