import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-links',
  templateUrl: './first-links.component.html',
  styleUrls: ['./first-links.component.scss']
})
export class FirstLinksComponent implements OnInit {
  gfg = true;
  fh = true;
  gfgText = "Access";
  fhText = "Access";

  constructor() { }

  ngOnInit(): void {
  }

  changeButtonText(type: string): any {
    if (type == '1') {
      if (this.gfg) {
        this.gfgText = "Access";
      } else {
        this.gfgText = "Close";
      }
    }

    if (type == '2') {
      if (this.fh) {
        this.fhText = "Access";
      } else {
        this.fhText = "Close";
      }
    }
  }
}
