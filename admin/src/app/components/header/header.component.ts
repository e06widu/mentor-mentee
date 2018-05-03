import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any = {};
  @Input() open = false;
  openDropDown = false;
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData('user').then((data: any) => this.user = data);
  }

  /**
   * Document click
   * @param event
   */
  @HostListener('document:click', ['$event'])
  hideDropDown(event) {
    this.openDropDown = false;
  }

  /**
   * Menu click
   */
  clickMenu() {
    this.toggleMenu.emit();
  }
}
