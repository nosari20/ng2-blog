import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {FORM_DIRECTIVES} from '@angular/forms';
import {TextareaComponent, TextAreaValueAccessor} from "../../components/textarea/";

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives:[MD_CARD_DIRECTIVES,MD_INPUT_DIRECTIVES, FORM_DIRECTIVES, TextareaComponent, TextAreaValueAccessor]
})
export class ContactComponent implements OnInit {

  private _email: string;
  private _subject: string;
  private _name: string;
  private _message: string;

  constructor() {}

  ngOnInit() {
  }

}
