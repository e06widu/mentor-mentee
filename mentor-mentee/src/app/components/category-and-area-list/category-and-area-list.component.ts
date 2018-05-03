import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded CategoryAndAreaListComponent.
 */
@Component({
  selector: 'app-sd-category-and-area-list',
  templateUrl: 'category-and-area-list.component.html',
  styleUrls: ['category-and-area-list.component.scss']
})
export class CategoryAndAreaListComponent implements OnInit {
  @Input() dataList: any[];
  @Input() title: string;

  /**
   * Creates an instance of the CategoryAndAreaListComponent
   */
  constructor() {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
  }
}
