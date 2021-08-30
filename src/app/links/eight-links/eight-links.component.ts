import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-links',
  templateUrl: './eight-links.component.html',
  styleUrls: ['./eight-links.component.scss']
})
export class EightLinksComponent implements OnInit {
  first = true;
  second = true;
  third = true;

  text1 = "Access";
  text2 = "Access";
  text3 = "Access";
  constructor() { }

  ngOnInit(): void {
  }

  changeText(type: string): any {
    if (type == '1') {
      if (this.first) {
        this.text1 = "Access";
      } else {
        this.text1 = "Close";
      }
    }

    if (type == '2') {
      if (this.second) {
        this.text2 = "Access";
      } else {
        this.text2 = "Close";
      }
    }
    if (type == '3') {
      if (this.third) {
        this.text3 = "Access";
      } else {
        this.text3 = "Close";
      }
    }
  }

}
