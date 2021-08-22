import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth-question',
  templateUrl: './forth-question.component.html',
  styleUrls: ['./forth-question.component.scss']
})
export class ForthQuestionComponent implements OnInit {
  divStyle = 50;
  question = 4;
  answerArray = ['A','B','C','D','E']
  constructor() { }

  ngOnInit(): void {
  }

}
