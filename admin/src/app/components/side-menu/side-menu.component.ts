import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  user: any = {};
  @Input() open = false;
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData('user').then((data: any) => this.user = data);
  }

  /**
   * Close menu
   */
  closeMenu() {
    this.toggleMenu.emit(false);
  }

}
