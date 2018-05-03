import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded LearningCategoriesComponent.
 */
@Component({
  selector: 'app-sd-learning-categories',
  templateUrl: 'learning-categories.component.html',
  styleUrls: ['learning-categories.component.scss']
})
export class LearningCategoriesComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  availableLearningCategories = [];

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the LearningCategoriesComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataLearningCategories.json');
  }

  initData() {
    this.availableLearningCategories = this.dataList['availableLearningCategories'];
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        dataList => this.dataList = dataList,
        error => this.errorMessage = <any>error,
        () => this.initData()
      );
  }
}
