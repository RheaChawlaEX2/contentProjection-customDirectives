import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { StringDirective } from '../inputString.directive';




@NgModule({
  declarations: [
    ProductCardComponent,
    StringDirective,
    ProductCardListComponent,
   
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    ProductCardListComponent
  ]
})
export class ProductsModule { }
