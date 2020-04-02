import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  links: { url: string }[] = [
    {url: 'basic'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
