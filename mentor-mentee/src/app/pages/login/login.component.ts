import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  selector: 'app-sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  nameText = '';
  passwordText = '';
  showError = false;

  /**
   * Creates an instance of the LoginComponent
   */
  constructor(private router: Router) {}

  // click Login
  clickLogin() {
    this.showError = true;

    if (this.nameText !== ''
    && this.passwordText !== '') {
      this.router.navigate(['/mentee/dashboard-first-time']);
    }
  }
}
