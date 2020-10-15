import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Option } from '../model/option.model';
import { StyleManagerService } from './style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly themeTag = 'theme';

  constructor(private http: HttpClient,
              private styleManager: StyleManagerService) {
  }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>('assets/options.json');
  }

  setTheme(themeToSet?): void {
    if (!themeToSet) {
      themeToSet = localStorage.getItem(this.themeTag) || 'deeppurple-amber';
    }
    localStorage.setItem(this.themeTag, themeToSet);
    this.styleManager.setStyle('theme', `/assets/css/${themeToSet}.css`);
  }

}
