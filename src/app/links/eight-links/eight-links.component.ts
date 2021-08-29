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
  constructor() { }

  ngOnInit(): void {
  }

}
