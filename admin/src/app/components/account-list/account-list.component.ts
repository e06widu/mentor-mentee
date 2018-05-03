import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit() {
  }

}
