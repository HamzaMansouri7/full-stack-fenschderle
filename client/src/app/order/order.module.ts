import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { OrderComponent } from './order.component';
import { MenuModule } from '../menu/menu.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule ,
    TranslateModule,
    MenuModule,
    FormsModule
  ]
})
export class OrderModule { }
