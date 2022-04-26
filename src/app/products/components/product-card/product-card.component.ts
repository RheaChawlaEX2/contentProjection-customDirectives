import { Component, OnInit,Input,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { Products } from '../../model/products';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements AfterViewInit {

  @Input()
  product? : Products


  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
      
  }
 

  

}
