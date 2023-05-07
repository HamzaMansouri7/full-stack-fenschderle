import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTableRoutingModule } from './book-table-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BookTableComponent } from './book-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookTableComponent
  ],
  imports: [
    CommonModule,
    BookTableRoutingModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookTableModule { }
