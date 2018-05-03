import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the HeaderComponent.
 */
@Component({
  selector: 'app-sd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() hiddenElementGroup: any[];
  @Input() activeMenu = '';
  @Input() status = '';

  errorMessage: string;
  dataList: any[] = [];

  notificationList = [];

  searchKeyword = '';
  searchLearningAreasList: any[] = [];
  searchEmployeesList: any[] = [];

  @ViewChild('connectSentModal') connectSentModal: any;
  connectSentModalRef: NgbModalRef;

  /**
   * Creates an instance of the RightSideComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private modalService: NgbModal) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataHeader.json');
  }

  initData() {
    this.notificationList = this.dataList['notificationList'];
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.connectSentModalRef !== undefined) {
      this.connectSentModalRef.close();
    }
  }

  // openModalWindow
  openModalWindow(modalId) {
    const modalRef = this.modalService.open(modalId);
    modalRef.result.then((result) => {
    }, (reason) => {
    });
    return modalRef;
  }

  // type on search input
  onKeySearch(event: any, deviceType) {
    const searchLearningAreasList_Temp = [];
    const searchEmployeesList_Temp = [];
    this.searchLearningAreasList = [];
    this.searchEmployeesList = [];

    const searchLabel = event.target.value;
    if (searchLabel.trim() !== '') {
      this.dataList['searchList']['learningAreas'].forEach(function(item, index) {
        if (item['title'].toLowerCase().indexOf(searchLabel.toLowerCase()) > -1) {
          const item_index = item['title'].toLowerCase().indexOf(searchLabel.toLowerCase());

          const firstLabel = item['title'].slice(0, item_index);
          const middleLabel = item['title'].slice(item_index, searchLabel.length + item_index);
          const lastLabel = item['title'].slice(searchLabel.length + item_index);

          searchLearningAreasList_Temp.push({
            'firstLabel': firstLabel,
            'middleLabel': middleLabel,
            'lastLabel': lastLabel,
            item
          });
        }
      });

      this.dataList['searchList']['learningAreas'].forEach(function(item, index) {
        if (item['title'].toLowerCase().indexOf(searchLabel.toLowerCase()) > -1) {
          const item_index = item['title'].toLowerCase().indexOf(searchLabel.toLowerCase());

          const firstLabel = item['title'].slice(0, item_index);
          const middleLabel = item['title'].slice(item_index, searchLabel.length + item_index);
          const lastLabel = item['title'].slice(searchLabel.length + item_index);

          searchLearningAreasList_Temp.push({
            'firstLabel': firstLabel,
            'middleLabel': middleLabel,
            'lastLabel': lastLabel,
            item
          });
        }
      });

      this.dataList['searchList']['employees'].forEach(function(item, index) {
        if (item['title'].toLowerCase().indexOf(searchLabel.toLowerCase()) > -1) {
          const item_index = item['title'].toLowerCase().indexOf(searchLabel.toLowerCase());

          const firstLabel = item['title'].slice(0, item_index);
          const middleLabel = item['title'].slice(item_index, searchLabel.length + item_index);
          const lastLabel = item['title'].slice(searchLabel.length + item_index);

          searchEmployeesList_Temp.push({
            'firstLabel': firstLabel,
            'middleLabel': middleLabel,
            'lastLabel': lastLabel,
            item
          });
        }
      });

      this.searchLearningAreasList = searchLearningAreasList_Temp;
      this.searchEmployeesList = searchEmployeesList_Temp;

      if (this.searchLearningAreasList.length > 0
       || this.searchEmployeesList.length > 0) {
        if (deviceType === 'desktop') {
          this.hiddenElementGroup['showSearchPopup'] = true;
        }
      }
    }
  }

  // select search option
  selectSearchOption(option) {
    this.searchKeyword = option.firstLabel + option.middleLabel + option.lastLabel;
    const searchLabel = this.searchKeyword;
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
