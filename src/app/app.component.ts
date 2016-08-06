import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import {HeaderComponent, HeaderLinkComponent, HeaderTopComponent} from "./components/header/";
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {FooterComponent, FooterItemComponent} from "./components/footer/";



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,HeaderComponent, FooterComponent, FooterItemComponent, HeaderLinkComponent, HeaderTopComponent, MdIcon],
  providers: [MdIconRegistry],
})
export class AppComponent {
  title = 'app works!';
}
