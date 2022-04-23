
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[textContent]'
})
export class InputDirectiveDirective {

  @Input() value:string = '' ;
  constructor(private el:ElementRef) { 
    this.el.nativeElement.textContent = el;
  }

 @HostListener('keypress') onKeyPress() {
    this.valueInput(this.value);
  }
  private valueInput(value:string){
    this.value = value  ;
  }
}

