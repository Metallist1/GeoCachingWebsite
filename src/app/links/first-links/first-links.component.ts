import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-links',
  templateUrl: './first-links.component.html',
  styleUrls: ['./first-links.component.scss']
})
export class FirstLinksComponent implements OnInit {
  gfg = true;
  fh = true;
  constructor() { }

  ngOnInit(): void {
  }

}
