import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded LearnJavascriptAreaComponent.
 */
@Component({
  selector: 'app-sd-learn-javascript-area',
  templateUrl: 'learn-javascript-area.component.html',
  styleUrls: ['learn-javascript-area.component.scss']
})
export class LearnJavascriptAreaComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  mentorContent = [];
  menteeContent = [];

  mentorFilterLocation = 'All';
  mentorFilterBusinessUnit = 'All';
  mentorFilterAccount = 'All';
  mentorFilterExperience = 'All';
  mentorFilterBand = 'All';

  menteeFilterLocation = 'All';
  menteeFilterAccount = 'All';
  menteeFilterExperience = 'All';

  mentorFilterLocationDropdownOption = [];
  mentorFilterBusinessUnitDropdownOption = [];
  mentorFilterAccountDropdownOption = [];
  mentorFilterExperienceDropdownOption = [];
  mentorFilterBandDropdownOption = [];

  menteeFilterLocationDropdownOption = [];
  menteeFilterAccountDropdownOption = [];
  menteeFilterExperienceDropdownOption = [];

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the LearnJavascriptAreaComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private location: Location) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/LearnJavascriptArea.json');
  }

  initData() {
    this.mentorContent = this.dataList['mentorContent'];
    this.menteeContent = this.dataList['menteeContent'];

    this.mentorFilterLocationDropdownOption = this.dataList['mentorFilterOption']['location'];
    this.mentorFilterBusinessUnitDropdownOption = this.dataList['mentorFilterOption']['businessUnit'];
    this.mentorFilterAccountDropdownOption = this.dataList['mentorFilterOption']['account'];
    this.mentorFilterExperienceDropdownOption = this.dataList['mentorFilterOption']['experience'];
    this.mentorFilterBandDropdownOption = this.dataList['mentorFilterOption']['band'];

    this.menteeFilterLocationDropdownOption = this.dataList['menteeFilterOption']['location'];
    this.menteeFilterAccountDropdownOption = this.dataList['menteeFilterOption']['account'];
    this.menteeFilterExperienceDropdownOption = this.dataList['menteeFilterOption']['experience'];
  }

  // click Cancel
  cancel() {
    this.location.back();
  }

  // change Filter of Mentor
  changeFilterMentor() {
    this.mentorContent = [];

    for (let i = 0; i < this.dataList['mentorContent'].length; i++) {
      let pass = true;

      if (this.mentorFilterLocation !== 'All') {
        if (this.dataList['mentorContent'][i]['location'] !== this.mentorFilterLocation) {
          pass = false;
        }
      }

      if (this.mentorFilterBusinessUnit !== 'All') {
        if (this.dataList['mentorContent'][i]['businessUnit'] !== this.mentorFilterBusinessUnit) {
          pass = false;
        }
      }

      if (this.mentorFilterAccount !== 'All') {
        if (this.dataList['mentorContent'][i]['account'] !== this.mentorFilterAccount) {
          pass = false;
        }
      }

      if (this.mentorFilterExperience !== 'All') {
        const year_value = parseInt(this.mentorFilterExperience.replace('Min ', '').replace(' years', '').replace(' year', ''), 10);
        if (parseInt(this.dataList['mentorContent'][i]['experience'], 10) < year_value) {
          pass = false;
        }
      }

      if (this.mentorFilterBand !== 'All') {
        if (this.dataList['mentorContent'][i]['band'] !== this.mentorFilterBand) {
          pass = false;
        }
      }

      if (pass) {
        this.mentorContent.push(this.dataList['mentorContent'][i]);
      }
    }
  }

  // change Filter of Mentee
  changeFilterMentee() {
    this.menteeContent = [];

    for (let i = 0; i < this.dataList['menteeContent'].length; i++) {
      let pass = true;

      if (this.menteeFilterLocation !== 'All') {
        if (this.dataList['menteeContent'][i]['location'] !== this.menteeFilterLocation) {
          pass = false;
        }
      }

      if (this.menteeFilterAccount !== 'All') {
        if (this.dataList['menteeContent'][i]['account'] !== this.menteeFilterAccount) {
          pass = false;
        }
      }

      if (this.menteeFilterExperience !== 'All') {
        const year_value = parseInt(this.menteeFilterExperience.replace('Min ', '').replace(' years', '').replace(' year', ''), 10);
        if (parseInt(this.dataList['menteeContent'][i]['experience'], 10) < year_value) {
          pass = false;
        }
      }

      if (pass) {
        this.menteeContent.push(this.dataList['menteeContent'][i]);
      }
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
