import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-learning-areas',
  templateUrl: './learning-areas.component.html',
  styleUrls: ['./learning-areas.component.scss']
})
export class LearningAreasComponent implements OnInit {

  filterType: any = null;
  filter: any = 'Category';
  view: any = 'GRID';
  MAX_LOADS: any = 2;
  NO_OF_LOAD: any = 0;
  learning: any = {
    count: 0,
    rows: [],
    filters: [],
    rejectedRequests: [],
    learnings: [],
    mentorsDropDown: [],
    categoryDropDown: [],
    learningDropDown: [],
  };
  sharedModal = false;
  bulkUploadModal = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData('learning').then((data: any) => this.learning = data);
    this.NO_OF_LOAD = 1;
  }

  /**
   * Load more data
   */
  loadMore() {
    this.dataService.getData('more-rows').then((data: any) => {
      this.NO_OF_LOAD += 1;
      this.learning.rows = this.learning.rows.concat(data.rows);
    });
  }

  /**
   * Open share modal
   */
  openShareModal() {
    this.sharedModal = true;
  }

  /**
   * Close share modal
   */
  closeShareModal() {
    this.sharedModal = false;
  }

  /**
   * Open bulk upload modal
   */
  openBulkUpdateModal() {
    this.bulkUploadModal = true;
  }

  /**
   * Update bulk upload
   */
  updateBulkUpdateModal() {
    console.log('Updating');
  }

  /**
   * Close bulk upload modal
   */
  closeBulkUpdateModal() {
    this.bulkUploadModal = false;
  }

  /**
   * Change filter value
   * @param value - new value
   */
  filterChange(value) {
    this.filter = value;
    this.filterType = value === 'Category' ? null : value;
  }
}
