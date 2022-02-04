import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userLogin: BehaviorSubject<User>;

  constructor() {
    this._userLogin = new BehaviorSubject({ logged: false} as User)
  }

  set userLogin(user: User) {
    this._userLogin.next(user);
  }

  get userLogin() {
    return this._userLogin.getValue();
  }

  get userLogin$(): Observable<User> {
    return this._userLogin.asObservable();
  }

  get userLogged(): boolean {
    return this.userLogin.logged;
  }
}
