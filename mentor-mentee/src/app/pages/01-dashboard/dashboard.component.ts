import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  selector: 'app-sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataList: any[] = [];

  availableLearningAreas = [];
  availableLearningCategories = [];

  @ViewChild('newMeetingRequestModal') newMeetingRequestModal: any;
  @ViewChild('confirmRequestModal') confirmRequestModal: any;
  newMeetingRequestModalRef: NgbModalRef;
  confirmRequestModalRef: NgbModalRef;

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the DashboardComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private modalService: NgbModal) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataDashboard.json');
  }

  initData() {
    this.availableLearningAreas = this.dataList['availableLearningAreas'];
    this.availableLearningCategories = this.dataList['availableLearningCategories'];
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.newMeetingRequestModalRef !== undefined) {
      this.newMeetingRequestModalRef.close();
    }

    if (this.confirmRequestModalRef !== undefined) {
      this.confirmRequestModalRef.close();
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
