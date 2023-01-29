import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';
import { ChefsComponent } from './chefs/chefs.component';
import { StatsCounterComponent } from './stats-counter/stats-counter.component';
import { MenuComponent } from './menu/menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCardComponent } from './menu/product-card/product-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    WhyUsComponent,
    TestimonialsComponent,
    EventsComponent,
    ChefsComponent,
    StatsCounterComponent,
    BookTableComponent,
    GalleryComponent,
    ContactComponent,
    ProductCardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule
  ],
  exports:[HomeComponent,
    AboutUsComponent,ContactComponent,GalleryComponent,ContactComponent,
    WhyUsComponent,
    TestimonialsComponent,
    EventsComponent,
    ChefsComponent,MenuComponent,
    StatsCounterComponent,TestimonialsComponent,EventsComponent,BookTableComponent,ProductCardComponent]
})
export class MainModule { }
