import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { MouseComponent } from './mouse/mouse.component';


@NgModule({
  declarations: [MouseComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
