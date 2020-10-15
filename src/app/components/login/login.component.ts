import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { RouterPath } from '../../constants/router-path.enum';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new CustomErrorStateMatcher();

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  login(): void {
    if (this.usernameFormControl.invalid || this.passwordFormControl.invalid) {
      this.usernameFormControl.markAsDirty();
      this.passwordFormControl.markAsDirty();
    } else {
      this.loginService.login(this.usernameFormControl.value, this.passwordFormControl.value)
        .subscribe(() => this.router.navigate([RouterPath.DEFAULT]));
    }
  }

}
