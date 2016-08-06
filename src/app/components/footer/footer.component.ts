import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  host:     {'[class.md-primary]':'true', '[class.md-background]':'true'}
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
