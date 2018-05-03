import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded ProgrammingAllComponent.
 */
@Component({
  selector: 'app-sd-programming-all',
  templateUrl: 'programming-all.component.html',
  styleUrls: ['programming-all.component.scss']
})
export class ProgrammingAllComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  postList = [];
  availableLearningCategoriesAndAreas = [];

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the ProgrammingAllComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataProgrammingAll.json');
  }

  initData() {
    this.postList = this.dataList['postList'];
    this.availableLearningCategoriesAndAreas = this.dataList['availableLearningCategoriesAndAreas'];
  }

  // click Load More button for Area list
  loadMoreAreaList() {
    for (let i = 0; i < 3; i++) {
      this.postList.push({
        'userPhoto': '../../../assets/i/mentor-pic1.png',
        'favNumber': '23',
        'postType': 'LINK',
        'title': 'The Best Leaders Are Great Teachers',
        'url': 'http://hbr.org/2018/01/the-best-leaders-are-great-teachers',
        'commentNumber': '12',
        'bannerImg': '',
        'time': '',
        'dayLabel': '',
        'monthLabel': '',
        'userList': [
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          },
          {
            'img': '../../../assets/i/mentor-pic1.png'
          }
        ]
      });
    }
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
