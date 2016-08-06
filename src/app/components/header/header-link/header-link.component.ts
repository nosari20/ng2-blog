import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header-link',
  templateUrl: 'header-link.component.html',
  styleUrls: ['header-link.component.css'],
  host:     {'[class.active]':'isActiveRoute()','[class.md-primary]':'true'},
  directives:[ROUTER_DIRECTIVES]
})
export class HeaderLinkComponent implements OnInit {

  @Input() _href: any[]=['/'];
  @Input() _underliner_class: string=""

  constructor(private _router: Router) {}

  ngOnInit() {
  }

  isActiveRoute() {
    return this._router.serializeUrl(this._router.createUrlTree([this._router.url]) ) == this._router.serializeUrl((this._router.createUrlTree(this._href)));
    //return this._router.isRouteActive(this._router.generate([this._href]))
  }

}
