import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learning-area',
  templateUrl: './learning-area.component.html',
  styleUrls: ['./learning-area.component.scss']
})
export class LearningAreaComponent implements OnInit {

  @Input() data: any = {};
  @Input() sortOrder = true;

  constructor() { }

  ngOnInit() {
  }

}
