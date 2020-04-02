import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeRoutingModule } from './range-routing.module';
import { RangeComponent } from './range.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BasicComponent } from './basic/basic.component';
import { SelectionChangeComponent } from './selection-change/selection-change.component';


@NgModule({
  declarations: [RangeComponent, BasicComponent, SelectionChangeComponent],
  imports: [
    CommonModule,
    RangeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RangeModule { }
