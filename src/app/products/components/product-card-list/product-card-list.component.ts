import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsService } from '../../../products.service';
// import { Products } from '../../model/products';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit, AfterViewInit {

  products :  any | []  ;
  editable: boolean = false;
  parameter : number | any;
  k : number = 0;

  
  

  constructor(private productsService: ProductsService,private activatedRoute : ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("index",params['id']) ;
      this.parameter = params['id']
    
    })
    console.log("this is parameter",this.parameter)
   }
   


  ngOnInit(): void {    
    if(this.parameter!== undefined){
      this.products = this.productsService.PRODUCTS['results'][this.parameter];
      
      console.log("single data",this.productsService.PRODUCTS['results'][this.parameter].name.first);

    }
    else{
      this.products = this.productsService.PRODUCTS['results'] ;
      console.log("multiple data",this.products);
    }
  }

  ngAfterViewInit(): void {
   
  
  }
  doneButton(value : any){
    this.products.name.first = value;
    // this.productsService.PRODUCTS['results'][this.parameter].name.first = value 
    this.router.navigate(["/products"]);
  }
  cancelButton(){
    
  }
  

 

}
