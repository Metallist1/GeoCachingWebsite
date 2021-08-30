import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-links',
  templateUrl: './second-links.component.html',
  styleUrls: ['./second-links.component.scss']
})
export class SecondLinksComponent implements OnInit {


  text = 'COR1nu@$1@!p.jpg';
  text2 = 'TheWaterIsSoft';
  constructor() { }

  ngOnInit(): void {
  }

  changeText(type: string): any {
    if (type == '1') {
        this.text = "WhyYouLeaveMe.jpg";
    }

    if (type == '2') {
      this.text2 = "DraggingYouDown.mp3";
    }
  }
}
