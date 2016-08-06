import { Component, OnInit } from '@angular/core';
import {HeaderLinkComponent} from "./header-link/";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  host:     {'[class.md-primary]':'true', '[class.md-background]':'true'}
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
