import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-learning-table-row',
  templateUrl: './learning-table-row.component.html',
  styleUrls: ['./learning-table-row.component.scss']
})
export class LearningTableRowComponent implements OnInit {

  @Input() data: any = {};
  @Input() index: any = 0;
  @Output() share: EventEmitter<any> = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * On share event
   * @param action
   */
  onShare(action) {
    if (action === 'Share') {
      this.share.emit();
    }
  }

}
