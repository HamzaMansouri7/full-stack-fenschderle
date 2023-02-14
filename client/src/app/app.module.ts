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
import { MainModule } from './main/main.module';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);
import localeFr from '@angular/common/locales/fr';



@NgModule({
    declarations: [
        AppComponent
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
        MainModule,
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
        
    ]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}