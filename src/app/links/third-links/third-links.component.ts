import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-links',
  templateUrl: './third-links.component.html',
  styleUrls: ['./third-links.component.scss']
})
export class ThirdLinksComponent implements OnInit {

  first = true;
  second = true;
  third = true;
  constructor() { }

  ngOnInit(): void {
  }

}
