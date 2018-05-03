import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the lazy loaded LearningAreasListComponent.
 */
@Component({
  selector: 'app-sd-learning-areas-list',
  templateUrl: 'learning-areas-list.component.html',
  styleUrls: ['learning-areas-list.component.scss']
})
export class LearningAreasListComponent implements OnInit, OnDestroy {
  @Input() dataList: any[];
  @Input() title: string;
  @Input() showYear = false;

  @ViewChild('connectSentModal') connectSentModal: any;
  connectSentModalRef: NgbModalRef;

  /**
   * Creates an instance of the LearningAreasListComponent
   */
  constructor(private modalService: NgbModal) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
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
}
