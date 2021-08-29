import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth-links',
  templateUrl: './forth-links.component.html',
  styleUrls: ['./forth-links.component.scss']
})
export class ForthLinksComponent implements OnInit {
  first = true;
  second = true;
  third = true;
  constructor() { }

  ngOnInit(): void {
  }

}
