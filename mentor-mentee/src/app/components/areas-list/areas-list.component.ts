import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded AreasListComponent.
 */
@Component({
  selector: 'app-sd-areas-list',
  templateUrl: 'areas-list.component.html',
  styleUrls: ['areas-list.component.scss']
})
export class AreasListComponent implements OnInit {
  @Input() dataList: any[];
  @Input() title: string;
  @Input() linkTarget: string;

  /**
   * Creates an instance of the AreasListComponent
   */
  constructor() {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
  }
}
