import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection-change',
  templateUrl: './selection-change.component.html',
  styleUrls: ['./selection-change.component.scss']
})
export class SelectionChangeComponent implements OnInit, OnDestroy {


  listener(event: Event) {
    console.log(document.getSelection());
  }

  constructor() {
  }

  ngOnDestroy(): void {
    document.removeEventListener('selectionchange', this.listener);
  }

  ngOnInit() {
    document.addEventListener('selectionchange', this.listener);
  }

}
