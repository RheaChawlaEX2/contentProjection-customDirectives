import { Directive, ElementRef,HostListener,Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[inputString]'
})
export class StringDirective {

  
   
  regex = '^[a-zA-Z]+$';
   initialValue : any;
  constructor(private inputElement: ElementRef) {
    this.initialValue = inputElement.nativeElement.value;
    
  }
  @HostListener('keypress',['$event']) onKeyPress(event : any) {
   
   return new RegExp(this.regex).test(event.key) || event.keyCode == 32 ;
  }

  @HostListener('keyup.space',['$event'])
  onKeyUp(event:KeyboardEvent){
    if(this.onKeyPress(event) ===true){
      this.inputElement.nativeElement.value = this.titleCaseFormat(this.inputElement.nativeElement.value); 
    } 
    else{
      this.inputElement.nativeElement.value = this. titleCaseFormat(this.initialValue);
    }
  }

  titleCaseFormat(inputString: any){

    return inputString.toLowerCase().split(' ').map(function (word: string) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    
  }


}



