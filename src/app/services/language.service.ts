import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../constants/language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly languageTag = 'language';

  constructor(private translate: TranslateService) {
  }

  setLanguage(language?: Language): void {
    if (language) {
      localStorage.setItem(this.languageTag, language);
    } else {
      language = this.getLanguage();
    }
    this.translate.use(language);
  }

  getLanguage(): Language {
    const language = localStorage.getItem(this.languageTag);
    return language ? Language[localStorage.getItem(this.languageTag)] : Language.en;
  }

}
