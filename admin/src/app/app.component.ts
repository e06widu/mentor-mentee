import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  open = false;

  toggleMenu($event) {
    if ($event === false && this.open === false) {
      this.open = false;
    } else {
      this.open = !this.open;
    }
  }
}
