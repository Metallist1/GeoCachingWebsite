import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-question',
  templateUrl: './six-question.component.html',
  styleUrls: ['./six-question.component.scss']
})
export class SixQuestionComponent implements OnInit {
  divStyle = 50;
  question = 6;
  answerArray = ['A','B','C','D','E']
  constructor() { }

  ngOnInit(): void {
  }

}
