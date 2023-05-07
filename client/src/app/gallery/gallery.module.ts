import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    TranslateModule.forChild()
  ]
})
export class GalleryModule { }
