import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../../../db-data';
import { ProductsModule } from '../../products.module';
// import { Products } from '../../model/products';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

  products = PRODUCTS['results'] ;
  

  constructor() { }
   


  ngOnInit(): void {
    console.log(this.products)
  }

}
