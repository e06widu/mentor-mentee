import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded ReviewPanelComponent.
 */
@Component({
  selector: 'app-sd-review-panel',
  templateUrl: 'review-panel.component.html',
  styleUrls: ['review-panel.component.scss']
})
export class ReviewPanelComponent implements OnInit {
  @Input() dataList: any[];

  /**
   * Creates an instance of the ReviewPanelComponent
   */
  constructor() {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
  }

  // click Read More
  readMore() {
    for (let i = 0; i < 3; i++) {
      this.dataList['list'].push({
        'img': '../../../assets/i/user1.jpg',
        'starNumber': 4,
        'time': 'Feb 11, 2018',
        'name': 'Nikita Stone',
        'description': 'David has built a series of interesting tech media businesses. He\'s a great mentor - he does his homework and asks good questions to see if you understood what he explained.'
      });
    }
  }
}
