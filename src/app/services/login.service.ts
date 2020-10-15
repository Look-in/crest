import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User;

  get user(): User {
    return this.currentUser;
  }

  login(username: string, password: string): Observable<{}> {
    return new Observable<{}>((obs) => {
      // TODO: Add login request
      const user = new User();
      user.username = username;
      user.password = password;
      user.name = username;
      this.setUser(user);
      obs.next();
    });
  }

  logout(): Observable<{}> {
    return new Observable<{}>((obs) => {
      // TODO: Add logout request
      this.setUser(null);
      obs.next();
    });
  }

  private setUser(user: User): void {
    this.currentUser = user;
  }

}
