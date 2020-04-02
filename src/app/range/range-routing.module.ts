import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RangeComponent} from './range.component';
import {BasicComponent} from './basic/basic.component';
import {SelectionChangeComponent} from './selection-change/selection-change.component';


const routes: Routes = [
  {
    path: '', component: RangeComponent, children: [
      {path: 'basic', component: BasicComponent},
      {path: 'selection-change', component: SelectionChangeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangeRoutingModule {
}
