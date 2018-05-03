import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded MyConnectionsComponent.
 */
@Component({
  selector: 'app-sd-my-connections',
  templateUrl: 'my-connections.component.html',
  styleUrls: ['my-connections.component.scss']
})
export class MyConnectionsComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataList: any[] = [];

  connectionList = [];

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
   * Creates an instance of the MyConnectionsComponent with the injected
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
    this.getDataList('../../assets/data/dataMyConnections.json');
  }

  initData() {
    this.connectionList = this.dataList['connectionList'];
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
