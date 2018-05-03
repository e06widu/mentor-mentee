import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded MenteeProfileEditComponent.
 */
@Component({
  selector: 'app-sd-mentee-profile-edit',
  templateUrl: 'mentee-profile-edit.component.html',
  styleUrls: ['mentee-profile-edit.component.scss']
})
export class MenteeProfileEditComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];

  reviewsData = [];

  modelPeriodFrom: NgbDateStruct;
  modelPeriodTo: NgbDateStruct;
  modelPeriodFromStored: NgbDateStruct;
  modelPeriodToStored: NgbDateStruct;

  showError = false;
  showEmailError = false;

  hiddenElementGroup = {
    showMenu: false,
    showSearchPopup: false,
    showSearchPopupMobile: false,
    showNotification: false
  };

  /**
   * Creates an instance of the MenteeProfileEditComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private router: Router,
              private location: Location) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataMenteeProfileEdit.json');

    this.modelPeriodFromStored = { year: null, month: null, day: null };
    this.modelPeriodToStored = { year: null, month: null, day: null };
  }

  initData() {
    if (window['wantToRegisterAsMentee'] === undefined || window['wantToRegisterAsMentee'] === false) {
      // not show form
      this.dataList['formData'] = [];
    } else if (window['isRegisterAsMentee'] === false) {
      // show empty form
      this.emptyForm(this.dataList);
    } else {
      // set date value
      const strFrom = this.dataList['formData'][0]['workDetails'][0]['timeFrom'].split('-');
      const strTo = this.dataList['formData'][0]['workDetails'][0]['timeTo'].split('-');
      this.modelPeriodFrom = { year: parseInt(strFrom[0], 10), month: parseInt(strFrom[1], 10), day: parseInt(strFrom[2], 10) };
      this.modelPeriodTo = { year: parseInt(strTo[0], 10), month: parseInt(strTo[1], 10), day: parseInt(strTo[2], 10) };
    }
  }

  // on change pic
  onChangePic(event) {
    this.dataList['userPhoto'] = '../../../assets/i/mentor-pic1.png';
  }

  // click Save button
  clickSave() {
    this.showError = true;

    if (this.dataList['formData'][0]['personalDetails']['Name'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Email'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Phone'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Domain'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Designation'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Location'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Wipro Experience'] !== ''
    && this.dataList['formData'][0]['personalDetails']['Total Experience'] !== ''
    && this.dataList['formData'][0]['aboutMyCurrentRole']['description'] !== ''
    && this.dataList['formData'][0]['aboutMyCurrentRole']['specialties'] !== ''
    && this.dataList['formData'][0]['aboutMyCurrentRole']['strengthAreas'] !== ''
    && this.dataList['formData'][0]['workDetails']['title'] !== ''
    && this.dataList['formData'][0]['workDetails']['description'] !== ''
    && this.dataList['formData'][0]['Volunteer as Mentor']['description'] !== ''
    && this.dataList['formData'][0]['Volunteer as Mentor']['keyStrengths'] !== ''
    && this.modelPeriodFrom !== undefined
    && this.modelPeriodTo !== undefined) {
      const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(this.dataList['formData'][0]['personalDetails']['Email'])) {
        this.showEmailError = false;
        window['isRegisterAsMentee'] = true;
        this.router.navigate(['/mentee/dashboard']);
      } else {
        this.showEmailError = true;
      }
    }
  }

  // remove skill
  removeSkill(item, index) {
    item.splice(index, 1);
  }

  // add Skill
  addSkill(item) {
    item.push({
      'value': ''
    });
  }

  // click Cancel
  cancel() {
    this.location.back();
  }

  // change the date selection
  changeStartDate() {
    if (this.modelPeriodTo !== undefined && this.modelPeriodTo !== null) {
      if (!this.compareNgbDateStruct(this.modelPeriodFrom, this.modelPeriodTo)) {
        this.modelPeriodFromStored = { year: this.modelPeriodFrom.year, month: this.modelPeriodFrom.month, day: this.modelPeriodFrom.day};
      } else {
        this.modelPeriodFrom = { year: this.modelPeriodFromStored.year, month: this.modelPeriodFromStored.month, day: this.modelPeriodFromStored.day};
      }
    } else {
      this.modelPeriodFromStored = { year: this.modelPeriodFrom.year, month: this.modelPeriodFrom.month, day: this.modelPeriodFrom.day};
    }
  }

  changeEndDate() {
    if (this.modelPeriodFrom !== undefined && this.modelPeriodFrom !== null) {
      if (!this.compareNgbDateStruct(this.modelPeriodFrom, this.modelPeriodTo)) {
        this.modelPeriodToStored = { year: this.modelPeriodTo.year, month: this.modelPeriodTo.month, day: this.modelPeriodTo.day};
      } else {
        this.modelPeriodTo = { year: this.modelPeriodToStored.year, month: this.modelPeriodToStored.month, day: this.modelPeriodToStored.day};
      }
    } else {
      this.modelPeriodToStored = { year: this.modelPeriodTo.year, month: this.modelPeriodTo.month, day: this.modelPeriodTo.day};
    }
  }

  // compare the NgbDateStruct values
  compareNgbDateStruct(firstValue, secondValue) {
    if (firstValue === undefined || firstValue === null
    || secondValue === undefined || secondValue === null) {
      return true;
    }
    let bigger = false;
    if (firstValue.year > secondValue.year) {
      bigger = true;
    } else if (firstValue.year === secondValue.year) {
      if (firstValue.month > secondValue.month) {
        bigger = true;
      } else if (firstValue.month === secondValue.month) {
        if (firstValue.day > secondValue.day) {
          bigger = true;
        }
      }
    }

    return bigger;
  }

  // empty Form
  emptyForm(dataList) {
    dataList['formData'] = [{
      'personalDetails': {
        'Name': '',
        'Email': '',
        'Phone': '',
        'Domain': '',
        'Designation': '',
        'Location': '',
        'Wipro Experience': '',
        'Total Experience': ''
      },
      'aboutMyCurrentRole': {
        'description': '',
        'specialties': '' ,
        'strengthAreas': ''
      },
      'workDetails': [
        {
          'img': '',
          'title': '',
          'timeFrom': '',
          'timeTo': '',
          'description': ''
        }
      ],
      'Volunteer as Mentor': {
        'description': '',
        'learningCategory': 'All',
        'learningArea': 'All',
        'keyStrengths': ''
      },
      'Skills and Band': {
        'list': [
          {
            'value': ''
          }
        ],
        'band': 'All'
      },
      'reviewsData': {
        'labelMin': '0',
        'labelMax': '0',
        'length': 0,
        'list': [
        ]
      }
    }];
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
