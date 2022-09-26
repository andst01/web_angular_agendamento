import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError } from 'rxjs';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { UserAuth } from '../_models/UserAuth';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrlApi: string = environment.apiLocal;
  public decodeToken: any;
  //#region Novo
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;
  public userAuth: UserAuth;
  
  //#endregion

  baseUrl = environment.apiAuth + 'auth/';
  userToken: any;
  
  constructor(public http: HttpClient) {
    this.manager.getUser().then((user) => {
      this.userAuth.nome = user?.profile?.nickname ?? '';
      this.userAuth.access_token = user?.access_token ?? '';
      this.userAuth.perfil = user?.profile?.name ?? '';

      localStorage.setItem('user', JSON.stringify(this.userAuth));

      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  async completeAuthentication() {
    this.user = await this.manager.signinRedirectCallback();
    this._authNavStatusSource.next(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user?.token_type} ${this.user?.access_token}`;
  }

  get name(): string {
    if (this.user == null) return '';

    return this.user.profile.nickname ?? '';
  }

  Nome(): string {
    return this.userAuth != null ? this.userAuth.nome : '';

  }

  async signout(): Promise<void> {
    await this.manager.signoutRedirect();
  }

  login() {
    return this.manager.signinRedirect();
  }

  register(userRegistration: any) {
    return this.http
      .post(environment.apiAuth + '/account', userRegistration)
      .pipe();
  }

  getUserConfig(): UserAuth {
   // if (this.user == null) return null;
    return this.userAuth;
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5000',
    client_id: 'mvc.portal.evento-oidc',
    client_secret: 'secret',
    redirect_uri: 'http://localhost:52858/auth-callback',
    post_logout_redirect_uri: 'http://localhost:52858/',
    response_type: 'id_token token',
    //response_type:'code id_token',
    scope: 'openid profile offline_access SGSWApi',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:52858/silent-refresh.html',
  };
}
