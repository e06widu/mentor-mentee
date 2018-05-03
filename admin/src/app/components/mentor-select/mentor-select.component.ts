import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mentor-select',
  templateUrl: './mentor-select.component.html',
  styleUrls: ['./mentor-select.component.scss']
})
export class MentorSelectComponent implements OnInit {

  @Input() selectAll = false;
  @Input() items = [];
  @Input() query: string;
  @Input() error;
  open = false;
  @Output() select: EventEmitter<any> = new EventEmitter;

  constructor(private _eref: ElementRef) {
  }

  ngOnInit() {
  }

  /**
   * get number of selected items
   */
  getNumberOfSelected() {
    let count = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].checked) {
        count++;
      }
    }
    this.select.emit(count);
  }

  /**
   * Change search query
   */
  onChange() {
    this.selectAll = false;
    this.getNumberOfSelected();
  }

  /**
   * toggle select and deselect
   */
  selectToggle() {
    if (this.selectAll) {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].checked = false;
      }
    } else {

      for (let i = 0; i < this.items.length; i++) {
        if (this.query === undefined || this.items[i].name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1) {
          this.items[i].checked = true;
        }
      }
    }
    this.selectAll = !this.selectAll;
    this.getNumberOfSelected();
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
   * Open popup
   */
  openPopup() {
    this.open = true;
  }

}
