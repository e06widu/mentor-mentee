import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';


const now = new Date();
/**
 * This class represents the lazy loaded RightSideComponent.
 */
@Component({
  selector: 'app-sd-right-side',
  templateUrl: 'right-side.component.html',
  styleUrls: ['right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  @Input() status = '';
  @Input() showStatus = true;
  @Input() showMainContent = true;
  @Input() showChart = false;
  @Input() showCalendar = false;
  @Input() showThreeBanners = true;

  model: NgbDateStruct;
  date: {year: number, month: number};

  errorMessage: string;
  dataList: any[] = [];

  /**
   * Creates an instance of the RightSideComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private router: Router) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataRightSide.json');

    if (window['isRegisterAsMentee'] === undefined || window['isRegisterAsMentee'] === false) {
      this.status = '';
      window['isRegisterAsMentee'] = false;
    } else {
      this.status = 'Mentee';
      window['isRegisterAsMentee'] = true;
    }
  }

  initData() {
    this.selectDate();
  }

  // select date
  selectDate() {
    const str = this.dataList['calendarList'][0]['date'].split('-');

    this.model = { year: parseInt(str[0], 10), month: parseInt(str[1], 10), day: parseInt(str[2], 10) };
  }

  // register As Mentee
  registerAsMentee() {
    this.status = 'Mentee';
    window['wantToRegisterAsMentee'] = true;
    this.router.navigate(['/mentee/mentee-profile-edit']);
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
