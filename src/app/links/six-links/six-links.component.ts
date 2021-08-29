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
  constructor() { }

  ngOnInit(): void {
  }

}
