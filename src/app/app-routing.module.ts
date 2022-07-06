import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultsComponent } from './products/components/results/results.component';
import { ProductCardListComponent } from './products/components/product-card-list/product-card-list.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductCardListComponent},
  {path:'products/:id', component:ProductCardListComponent},
  {path:'images', component: ResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
