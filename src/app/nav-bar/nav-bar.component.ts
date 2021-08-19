import { Component, OnInit } from '@angular/core';

import { faUsers, faQuestion, faBug, faAngleDoubleRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faUser = faUsers;
  faQuestion = faQuestion;
  faBug = faBug;
  faAngleDoubleRight = faAngleDoubleRight;
  faHome = faHome;
  size = '2x'!;
  constructor() { }

  ngOnInit(): void {
  }

}
