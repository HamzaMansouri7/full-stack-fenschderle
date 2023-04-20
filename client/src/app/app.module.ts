import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { UIState } from 'src/state/ui.state';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { CommonModule, registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);
import localeFr from '@angular/common/locales/fr';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './menu/product-card/product-card.component';
import { OrderComponent } from './order/order.component';
import { StatsCounterComponent } from './stats-counter/stats-counter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
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
        MenuComponent,
        OrderComponent
    ],
   
    providers: [{
        provide: LOCALE_ID,
        useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
        },
    ],
    
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        CommonModule,
        TranslateModule,
        FormsModule,
        NgxsModule.forRoot([UIState], { developmentMode: !environment.production }),
        // NgxsStoragePluginModule.forRoot(),
        // NgxsLoggerPluginModule.forRoot({disabled: true || environment.production}),
        // NgxsReduxDevtoolsPluginModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        
    ],
    exports:[HomeComponent,
        AboutUsComponent,ContactComponent,GalleryComponent,ContactComponent,
        WhyUsComponent,
        TestimonialsComponent,
        EventsComponent,
        ChefsComponent,MenuComponent,
        StatsCounterComponent,TestimonialsComponent,EventsComponent,BookTableComponent,ProductCardComponent,OrderComponent,]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}