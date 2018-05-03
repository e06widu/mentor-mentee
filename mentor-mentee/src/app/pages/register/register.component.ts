import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded RegisterComponent.
 */
@Component({
  selector: 'app-sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  nameText = '';
  passwordText = '';
  emailText = '';
  phoneText = '';
  domainText = '';
  designationText = '';
  locationText = '';
  wiproExperienceText = '';
  totalExperienceText = '';
  showError = false;
  showEmailError = false;

  /**
   * Creates an instance of the RegisterComponent
   */
  constructor(private router: Router) {}

  // click Register
  clickRegister() {
    this.showError = true;

    if (this.nameText !== ''
    && this.passwordText !== ''
    && this.emailText !== ''
    && this.phoneText !== ''
    && this.domainText !== ''
    && this.designationText !== ''
    && this.locationText !== ''
    && this.wiproExperienceText !== ''
    && this.totalExperienceText !== '') {
      const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(this.emailText)) {
        this.showEmailError = false;
        this.router.navigate(['/mentee/login']);
      } else {
        this.showEmailError = true;
      }
    }
  }
}
