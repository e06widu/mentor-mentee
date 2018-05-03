import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the left side component.
 */
@Component({
  selector: 'app-sd-left-side',
  templateUrl: 'left-side.component.html',
  styleUrls: ['left-side.component.scss'],
})
export class LeftSideComponent implements OnInit {
  @Input() hiddenElementGroup: any[];
  @Input() activeMenu = '';
  status: string;

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    if (window['isRegisterAsMentee'] === undefined || window['isRegisterAsMentee'] === false) {
      this.status = '';
    } else {
      this.status = 'Mentee';
    }
  }
}
