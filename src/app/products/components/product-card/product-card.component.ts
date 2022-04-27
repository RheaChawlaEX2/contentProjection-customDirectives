import { Component, Input,ViewChild,ElementRef, AfterViewInit,  Output, EventEmitter,OnChanges } from '@angular/core';
import { Products } from '../../model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {

  @Input()
  product? : Products

  @Input()
  editable? : boolean;

  @ViewChild('content') newContent:ElementRef | any;

  @Output() currentValue = new EventEmitter();
  


  constructor(private router: Router) {
    
   }
  ngOnInit(): void {
    
  }
  
  

 initialValue(){
  this.currentValue.emit(this.newContent.nativeElement.textContent);
 }

 cancelButton(){
  this.router.navigate(["/products"]);
 }

  

}
