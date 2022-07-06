import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit{
  products :  any | []  ;
  editable: boolean = false;
  parameter : number | any;
  k : number = 0;

  constructor(private productsService: ProductsService,private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.parameter = params['id']
    })
   }

  ngOnInit(): void {    
    if(this.parameter){
      this.products = [this.productsService.getSingleData(this.parameter)];
      this.editable = true;
    }
    else{
      this.products = this.productsService.getData();
    }
  }

  doneButton(value : any){
   this.productsService.doneCreateService(value,this.parameter);
  }

  cancelButton(){
    this.productsService.cancelService();
  }

}
