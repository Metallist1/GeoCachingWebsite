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
  constructor() { }

  ngOnInit(): void {
  }

}
