import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
  divStyle = 50;
  question = 1;
  answerArray = ['A','B','C','D','E','F']
  constructor() { }

  ngOnInit(): void {
  }

}
