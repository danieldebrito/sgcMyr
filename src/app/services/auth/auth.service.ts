import { Injectable } from '@angular/core';
import { Login } from 'src/app/class/auth/login';
import { BaseUrlWebService } from '../_baseUrl_web.service';
import { User } from 'src/app/class/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    // link para redireccionar de acuerdo al resultado del login
    redirectUrl: string;

    public identity: User;

    constructor(public miHttp: BaseUrlWebService) { }

  Loguear(dataLogin: Login) {
    const request: JSON = JSON.parse(JSON.stringify(dataLogin));

    return this.miHttp.httpPostP('/user/login', request);
  }

  public getIdentityLocalStorage() {
    const identityLS = JSON.parse(localStorage.getItem('identity'));
    if ( identityLS !== 'undefined' ) {
      this.identity = identityLS;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  public logout() {
    localStorage.clear();
  }
}
