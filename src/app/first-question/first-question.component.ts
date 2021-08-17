import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
  divStyle = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
