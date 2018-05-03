import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-status-card',
  templateUrl: './dashboard-status-card.component.html',
  styleUrls: ['./dashboard-status-card.component.scss']
})
export class DashboardStatusCardComponent implements OnInit {

  @Input() data: any = {};

  constructor() {
  }

  ngOnInit() {
  }

}
