import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss']
})
export class SecondQuestionComponent implements OnInit {
  divStyle = 50;
  question = 2;
  answerArray = ['A','B','C','D','E','F']
  constructor() { }

  ngOnInit(): void {
  }

}
