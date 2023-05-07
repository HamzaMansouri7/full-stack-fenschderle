import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports:[]
})
export class MenuModule { }
