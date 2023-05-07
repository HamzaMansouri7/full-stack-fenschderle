import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTableComponent } from './book-table.component';

const routes: Routes = [
  {path : '', component :  BookTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTableRoutingModule { }
