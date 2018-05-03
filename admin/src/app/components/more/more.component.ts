import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  open = false;
  @Input() items: any = [];
  @Output() action: EventEmitter<any> = new EventEmitter;

  constructor(private _eref: ElementRef) {
  }

  ngOnInit() {
  }

  /**
   * Document click event
   * @param event
   */
  @HostListener('document:click', ['$event'])
  hideDropDown(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  /**
   * On action click
   * @param value
   */
  onAction(value) {
    this.action.emit(value);
    this.open = false;
  }

}
