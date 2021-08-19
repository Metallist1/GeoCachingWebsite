import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretQuestionComponent } from './secret-question/secret-question.component';
import {NgxsModule} from "@ngxs/store";
import {AdminAuthState} from "./shared/states/auth/login.state";
import {environment} from "../environments/environment";
import { FirstQuestionComponent } from './first-question/first-question.component';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';
import { ForthQuestionComponent } from './forth-question/forth-question.component';
import { FifthQuestionComponent } from './fifth-question/fifth-question.component';
import { SixQuestionComponent } from './six-question/six-question.component';
import { SevenQuestionComponent } from './seven-question/seven-question.component';
import { EightQuestionComponent } from './eight-question/eight-question.component';
import {AngularFireModule} from "@angular/fire";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {TeamsState} from "./shared/states/teams/teams.state";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IntroComponent } from './intro/intro.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import {LocationState} from "./shared/states/location/location.state";
import { QuestionViewComponent } from './question-view/question-view.component';

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
    QuestionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,

    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxsModule.forRoot([ AdminAuthState, TeamsState, LocationState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['team']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
