import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-mentor-card',
  templateUrl: './dashboard-mentor-card.component.html',
  styleUrls: ['./dashboard-mentor-card.component.scss']
})
export class DashboardMentorCardComponent implements OnInit {

  @Input() data: any = {};

  constructor() { }

  ngOnInit() {
  }

}
