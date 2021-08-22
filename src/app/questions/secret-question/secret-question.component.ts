import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-question',
  templateUrl: './secret-question.component.html',
  styleUrls: ['./secret-question.component.scss']
})
export class SecretQuestionComponent implements OnInit {
  divStyle = 50;
  question = 9;
  answerArray = ['A','B','C','D','E','F']
  constructor() { }

  ngOnInit(): void {
  }

}
