import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[MD_CARD_DIRECTIVES, MdButton, MdIcon],
  providers: [MdIconRegistry],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
