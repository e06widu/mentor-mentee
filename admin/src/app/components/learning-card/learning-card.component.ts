import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss']
})
export class LearningCardComponent implements OnInit {

  @Input() data: any = {};
  @Output() share: EventEmitter<any> = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * On Share event
   */
  onShare() {
    this.share.emit();
  }

}
