import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-links',
  templateUrl: './six-links.component.html',
  styleUrls: ['./six-links.component.scss']
})
export class SixLinksComponent implements OnInit {
  first = true;
  second = true;
  third = true;

  text1 = "Access";
  text2 = "Access";
  text3 = "Access Message From The Server";
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
        this.text3 = "Data purged";
    }
  }

}
