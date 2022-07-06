import { Directive, ElementRef,HostListener,Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[inputString]'
})
export class StringDirective {

  regex = '^[a-zA-Z]+$';
  
  constructor(private inputElement: ElementRef) {
  }
  @HostListener('keypress',['$event']) onKeyPress(event : any) {
   
   return new RegExp(this.regex).test(event.key) || event.keyCode == 32 ;
  }

  @HostListener('keyup.space',['$event'])
  onKeyUp(event:KeyboardEvent){
      this.inputElement.nativeElement.textContent = this.titleCaseFormat(this.inputElement.nativeElement.textContent);     
  }

  titleCaseFormat(inputString: any){

    return inputString.toLowerCase().split(' ').map(function (word: string) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    
  }
}



