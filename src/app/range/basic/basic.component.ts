import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {


  @ViewChild('rangeParent', {
    static: true
  }) rangeParent;

  @ViewChild('anotherRangeTarget', {
    static: true
  }) anotherRangeTarget;

  rangeFrom: FormGroup = this.fb.group({
    start: [0],
    end: [3]
  });

  anotherForm: FormGroup = this.fb.group({
    start: [0],
    end: [0]
  });

  textRangeForm: FormGroup = this.fb.group({
    start: [0],
    end: [0]
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  addRange() {
    const range = new Range();
    range.setStart(this.rangeParent.nativeElement, this.rangeFrom.get('start').value);
    range.setEnd(this.rangeParent.nativeElement, this.rangeFrom.get('end').value);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  }

  addAnotherRange() {
    const range = new Range();
    range.setStart(this.rangeParent.nativeElement, this.anotherForm.get('start').value);
    range.setEnd(this.anotherRangeTarget.nativeElement, this.anotherForm.get('end').value);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  }

  addTextRange() {
    const range = new Range();
    range.setStart(this.rangeParent.nativeElement.firstChild, this.textRangeForm.get('start').value);
    range.setEnd(this.rangeParent.nativeElement.lastChild, this.textRangeForm.get('end').value);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  }

  ngOnInit(): void {
  }
}
