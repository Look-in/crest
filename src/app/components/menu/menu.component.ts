import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterPath } from '../../constants/router-path.enum';

export class MatMenuListItem {
  menuLinkText: string;
  menuIcon: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: MatMenuListItem[];
  selectedMenu: string;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router,
              private location: Location) {
    this.matIconRegistry.addSvgIcon('logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logo.svg'));
    this.menuItems = [
      {
        menuLinkText: 'menu.cameras',
        menuIcon: 'videocam',
        link: RouterPath.DEFAULT
      },
      {
        menuLinkText: 'menu.reports',
        menuIcon: 'voicemail',
        link: RouterPath.REPORTS
      },
      {
        menuLinkText: 'menu.settings',
        menuIcon: 'settings',
        link: RouterPath.SETTINGS
      }
    ];
    this.selectedMenu = this.menuItems.find(item => location.isCurrentPathEqualTo(`/${item.link}`))?.menuLinkText;
  }

  clickMenuItem(item: MatMenuListItem): void {
    this.selectedMenu = item.menuLinkText;
    this.router.navigate([item.link]);
  }

}
