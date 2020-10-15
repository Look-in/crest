import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterPath } from '../../constants/router-path.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public loginService: LoginService,
              private router: Router) {
  }

  logout(): void {
    this.loginService.logout()
      .subscribe(() => this.router.navigate([RouterPath.LOGIN]));
  }

}
