import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import { InputDirectiveDirective } from 'src/app/input-directive.directive';
import { Products } from '../../model/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product? : Products


  // @Input()
  // gender : string

  @Input()
  value:string | undefined;
  
  
  @ViewChild('input') public inputEl: ElementRef  | undefined;

  isNumber(value: string){
    if(Number(value)){
      this.fun()
    } 
        
  }

fun() {
  if(this.inputEl)
  this.inputEl.nativeElement.disabled = true;
}
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputEl?.nativeElement.value)
  }
 

  

}
