import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-mentor',
  templateUrl: './dashboard-mentor.component.html',
  styleUrls: ['./dashboard-mentor.component.scss']
})
export class DashboardMentorComponent implements OnInit {

  @Input() data: any = {};

  constructor() { }

  ngOnInit() {
  }

}
