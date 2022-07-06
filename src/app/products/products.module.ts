import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { StringDirective } from '../inputString.directive';
import { ResultsComponent } from './components/results/results.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ResultListComponent } from './components/result-list/result-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    StringDirective,
    ProductCardListComponent,
    ResultsComponent,
    PaginationComponent,
    ResultListComponent,
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    ProductCardListComponent,
    ResultsComponent,
    PaginationComponent,
    ResultListComponent,
    
  ],
 
})
export class ProductsModule { }
