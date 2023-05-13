import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuModule } from '../menu/menu.module';
import { GalleryModule } from '../gallery/gallery.module';
import { ContactModule } from '../contact/contact.module';
import { EventsModule } from '../events/events.module';
import { BookTableModule } from '../book-table/book-table.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
    MenuModule,
    GalleryModule,
    ContactModule,
    EventsModule,
    BookTableModule
  ],
})
export class HomeModule { }
