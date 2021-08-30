import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-links',
  templateUrl: './seven-links.component.html',
  styleUrls: ['./seven-links.component.scss']
})
export class SevenLinksComponent implements OnInit {
  first = true;
  second = true;
  third = true;

  text1 = "TheSkyWasBlue";
  text2 = "AndYouWereJustGone";
  text3 = "Access";
  text3extra = "TheThoughts";
  text4 = "Access";
  text4extra = "ForgottenSoul";
  constructor() { }

  ngOnInit(): void {
  }

  changeText(type: string): any {
    if (type == '1') {
      this.text1 = "Morning.mp3";
    }
    if (type == '2') {
      this.text2 = "Something.mp3";
    }
    if (type == '3') {
      this.text3extra = "Madness";
      if (this.second) {
        this.text3 = "Access";
      } else {
        this.text3 = "Close";
      }
    }
    if (type == '4') {
      this.text4extra = "Email";
      if (this.third) {
        this.text4 = "Access";
      } else {
        this.text4 = "Close";
      }
    }
  }

}
