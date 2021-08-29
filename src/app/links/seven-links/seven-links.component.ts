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
  constructor() { }

  ngOnInit(): void {
  }

}
