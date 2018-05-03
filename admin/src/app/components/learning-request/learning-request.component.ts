import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learning-request',
  templateUrl: './learning-request.component.html',
  styleUrls: ['./learning-request.component.scss']
})
export class LearningRequestComponent implements OnInit {

  @Input() data: any = {};
  @Input() title: any = '';
  @Input() approval = false;

  constructor() { }

  ngOnInit() {
  }

}
