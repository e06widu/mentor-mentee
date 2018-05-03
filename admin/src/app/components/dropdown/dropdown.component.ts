import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  open = false;
  @Input() options: any = [];
  @Input() value: any;
  @Input() large = false;
  @Input() extraLarge = false;
  @Input() error = false;
  @Input() placeholder = '';
  @Output() select: EventEmitter<any> = new EventEmitter;

  constructor(private _eref: ElementRef) {
  }

  ngOnInit() {
  }

  /**
   * On select item
   * @param value - selected value
   */
  onSelect(value) {
    this.value = value;
    this.select.emit(value);
    this.open = false;
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

}
