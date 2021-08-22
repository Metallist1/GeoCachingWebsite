import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-question',
  templateUrl: './eight-question.component.html',
  styleUrls: ['./eight-question.component.scss']
})
export class EightQuestionComponent implements OnInit {
  divStyle = 50;
  question = 8;
  answerArray = ['A','B','C','D','E']
  constructor() { }

  ngOnInit(): void {
  }

}
