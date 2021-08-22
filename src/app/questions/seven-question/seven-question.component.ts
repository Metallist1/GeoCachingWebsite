import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-question',
  templateUrl: './seven-question.component.html',
  styleUrls: ['./seven-question.component.scss']
})
export class SevenQuestionComponent implements OnInit {
  divStyle = 50;
  question = 7;
  constructor() { }
  answerArray = ['A','B','C','D']

  ngOnInit(): void {
  }

}
