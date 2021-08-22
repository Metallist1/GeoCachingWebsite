import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {
  divStyle = 50;
  question = 5;
  answerArray = ['A','B','C','D','E']
  constructor() { }

  ngOnInit(): void {
  }

}
