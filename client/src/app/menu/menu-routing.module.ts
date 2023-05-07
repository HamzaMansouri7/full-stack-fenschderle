import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {path : '', component :  MenuComponent},
  {path : 'product-card', component : ProductCardComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
