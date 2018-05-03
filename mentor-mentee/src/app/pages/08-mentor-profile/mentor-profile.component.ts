import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded MentorProfileComponent.
 */
@Component({
  selector: 'app-sd-mentor-profile',
  templateUrl: 'mentor-profile.component.html',
  styleUrls: ['mentor-profile.component.scss']
})
export class MentorProfileComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataList: any[] = [];

  reviewsData = [];
  showMessageBar = false;

  @ViewChild('newMeetingRequestModal') newMeetingRequestModal: any;
  @ViewChild('confirmRequestModal') confirmRequestModal: any;
  @ViewChild('connectSentModal') connectSentModal: any;
  newMeetingRequestModalRef: NgbModalRef;
  confirmRequestModalRef: NgbModalRef;
  connectSentModalRef: NgbModalRef;

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the MentorProfileComponent with the injected
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
    this.getDataList('../../assets/data/dataMentorProfile.json');
  }

  initData() {
    this.reviewsData = this.dataList['formData'][0]['reviewsData'];
  }

  // connect Sent
  connectSent() {
    this.dataList['sentRequest'] = true;

    if (Math.floor(Math.random() * 2) === 1) {
      setTimeout( () => {
        this.dataList['status'] = 'Connected';
      }, 2000);
    } else {
      setTimeout( () => {
        this.dataList['status'] = 'Rejected';
      }, 2000);
    }
    this.showMessageBar = true;
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
