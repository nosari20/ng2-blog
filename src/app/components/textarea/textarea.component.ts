import {Component, OnInit, Directive, forwardRef, Provider, Input, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-textarea',
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.css']
})
export class TextareaComponent implements OnInit {

  private _focus:boolean=false;
  @Input() placeholder:string=""
  @Input() data: boolean;
  @Output() dataChange: any = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  focus(){
    this._focus=true
  }
  blur(){
    this._focus=false
  }


  //for ngModel
  writeValue(value:boolean) {
    this.data = value;
  }
  changeValue(value: boolean){
    this.data=value;
    this.dataChange.emit(this.data)
  }

}

//for ngModel

const TEXTAREA_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => TextAreaValueAccessor), multi: true});

@Directive({
  selector: 'md-switch',
  host: {'(dataChange)': 'onChange($event)'},
  providers: [TEXTAREA_VALUE_ACCESSOR]
})
export class TextAreaValueAccessor implements ControlValueAccessor {
  onChange = (_) => {};
  onTouched = () => {};

  constructor(private host: TextareaComponent) {

  }

  writeValue(value: boolean): void {
    this.host.writeValue(value);
  }


  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
