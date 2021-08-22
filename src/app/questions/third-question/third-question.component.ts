import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {
  divStyle = 50;
  question = 3;
  answerArray = ['A','B','C','D','E','F']
  constructor() { }

  ngOnInit(): void {
  }

}
