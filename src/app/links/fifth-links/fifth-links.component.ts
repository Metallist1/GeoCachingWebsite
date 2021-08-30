import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-links',
  templateUrl: './fifth-links.component.html',
  styleUrls: ['./fifth-links.component.scss']
})
export class FifthLinksComponent implements OnInit {
  first = true;
  second = true;
  third = true;

  text1 = "Access";
  text2 = "Access";
  text3 = "Access Known Keter Entity Database";
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
        this.text3 = "Error. Connection interrupted";
    }
  }
}
