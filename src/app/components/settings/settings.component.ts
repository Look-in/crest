import { Component, OnInit } from '@angular/core';
import { Language } from '../../constants/language.enum';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { Option } from '../../model/option.model';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  currentLanguage: Language;

  languages = Object.keys(Language);

  constructor(private languageService: LanguageService,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
  }

  selectLanguage(event: any): void {
    this.currentLanguage = event.value;
    this.languageService.setLanguage(Language[this.currentLanguage]);
  }

  themeChange(themeToSet): void {
    this.themeService.setTheme(themeToSet);
  }

}
