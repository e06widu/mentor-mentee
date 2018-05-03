import {Component, HostListener, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public statusCardOption: NgxCarousel;
  public avatarCardOption: NgxCarousel;

  width = 2000;
  tabIndex = 'mentorRequests';
  filterValue = 'Most Mentor';
  sortOrder = false;
  dashboard: any = {
    filters: [],
    status: [],
    learningAreas: [],
    mentorRequests: [],
    mentors: {
      count: 0,
      mentors: [],
      mentees: [],
      admins: [],
    },
    learnings: []
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData('dashboard').then((data: any) => this.dashboard = data);
    this.width = window.innerWidth;
    this.statusCardOption = {
      grid: {xs: 2, sm: 2, md: 2, lg: 2, all: 210},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #6b6b6b;
            padding: 5px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background-color: #d8d8d8;
            margin: 0 3px;
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
            background: #3ca2de;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };

    this.avatarCardOption = {
      grid: {xs: 2, sm: 2, md: 2, lg: 2, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #6b6b6b;
            padding: 5px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background-color: #d8d8d8;
            margin: 0 3px;
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
            background: #3ca2de;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    if (this.width < 768) {
      this.statusCardOption.grid = {xs: 2, sm: 2, md: 2, lg: 2, all: 210};
    } else {
      this.statusCardOption.grid = {xs: 2, sm: 2, md: 2, lg: 2, all: 0};
    }
  }

  /**
   * Carousel change
   * @param e
   */
  statusCardOnLoad(e) {
    console.log(e);
  }

  /**
   * Sorting learning areas
   * @param value
   */
  onLearningAreaSort(value) {
    this.sortOrder = value !== 'Most Mentor';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    if (this.width < 768) {
      this.statusCardOption.grid = {xs: 2, sm: 2, md: 2, lg: 2, all: 210};
    } else {
      this.statusCardOption.grid = {xs: 2, sm: 2, md: 2, lg: 2, all: 0};
    }
  }

}
