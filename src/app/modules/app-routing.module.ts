import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '../constants/router-path.enum';
import { CameraComponent } from '../components/camera/camera.component';
import { ReportComponent } from '../components/report/report.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { AuthorizationGuard } from '../services/authorization-guard.service';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: RouterPath.LOGIN,
    component: LoginComponent
  },
  {
    path: RouterPath.REPORTS,
    component: ReportComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: RouterPath.SETTINGS,
    component: SettingsComponent
  },
  {
    path: RouterPath.DEFAULT,
    component: CameraComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: RouterPath.WRONG,
    redirectTo: RouterPath.DEFAULT,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
