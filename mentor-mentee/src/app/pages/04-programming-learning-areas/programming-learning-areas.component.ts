import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded ProgrammingLearningAreasComponent.
 */
@Component({
  selector: 'app-sd-programming-learning-areas',
  templateUrl: 'programming-learning-areas.component.html',
  styleUrls: ['programming-learning-areas.component.scss']
})
export class ProgrammingLearningAreasComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  availableLearningAreas = [];
  availableLearningCategoriesAndAreas = [];

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the ProgrammingLearningAreasComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataProgrammingLearningAreas.json');
  }

  initData() {
    this.availableLearningAreas = this.dataList['availableLearningAreas'];
    this.availableLearningCategoriesAndAreas = this.dataList['availableLearningCategoriesAndAreas'];
  }

  // click Load More in AVAILABLE LEARNING CATEGORIES AND AREAS section
  loadMoreCategoriesAndAreas() {
    for (let i = 0; i < 3; i++) {
      this.availableLearningCategoriesAndAreas.push({
        'img': '../../../assets/i/mentor-pic1.png',
        'learningCategory': 'Programming',
        'learningAreas': 'Learn Javascript, HTML5 in 20 days, Basics of Python, Matchine Learning, C# Basics, Code in Swift, Learning C++, Java in 3 steps, Ruby, PHP...',
        'showViewAll': true,
        'menteesNumber': '85'
      });
    }
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
