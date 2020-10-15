import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private languageService: LanguageService,
              private themeService: ThemeService) {
    languageService.setLanguage();
    themeService.setTheme();
  }

}
