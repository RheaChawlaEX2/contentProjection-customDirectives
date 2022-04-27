import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardListComponent } from './products/components/product-card-list/product-card-list.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductCardListComponent},
  {path:'products/:id', component:ProductCardListComponent},
//   {path:'products' ,
//   children: [
//       {path:'edit', component:ProductEditComponent},
//       // {path:'edit/:id', component:ProductEditComponent}
//   ]
// }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
