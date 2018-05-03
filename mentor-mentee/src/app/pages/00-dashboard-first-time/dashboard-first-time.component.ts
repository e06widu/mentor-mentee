import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded DashboardFirstTimeComponent.
 */
@Component({
  selector: 'app-sd-dashboard-first-time',
  templateUrl: 'dashboard-first-time.component.html',
  styleUrls: ['dashboard-first-time.component.scss']
})
export class DashboardFirstTimeComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  mentorContent = [];
  menteeContent = [];
  availableLearningAreas = [];
  availableLearningCategories = [];

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the DashboardFirstTimeComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {
    this.dataList['img'] = '../../../assets/i/mentor-pic1.png';
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataDashboardFirstTime.json');
  }

  initData() {
    this.mentorContent = this.dataList['mentorContent'];
    this.menteeContent = this.dataList['menteeContent'];
    this.availableLearningAreas = this.dataList['availableLearningAreas'];
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
