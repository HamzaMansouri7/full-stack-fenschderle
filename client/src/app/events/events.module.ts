import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule ,
    TranslateModule.forChild()
  ],
  exports:[EventsComponent]

})
export class EventsModule { }
