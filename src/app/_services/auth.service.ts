import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError } from 'rxjs';
import { UserAuth } from '../_models/UserAuth';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})



export class AuthService {
  baseUrlApi: string = environment.apiLocal;
  public decodeToken: any;
  teste: boolean = false;
  //private userSettings: UserSettings;
  // user: User | any;
  userAuth: UserAuth = new UserAuth();
  //#region Novo
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  //private manager = new UserManager(getClientSettings());



  //#endregion

  baseUrl = environment.apiAuth + 'auth/';
  userToken: any;

  constructor(public http: HttpClient,
    private oauthService: OAuthService
  ) {

/*
    this.manager.getUser().then((user) => {
      console.log(user);
      if (user != null) {
        this.userAuth.nome = user?.profile?.nickname ?? '';
        this.userAuth.access_token = user?.access_token ?? '';
        this.userAuth.perfil = user?.profile?.name ?? '';


        localStorage.setItem('user', JSON.stringify(this.userAuth));
        this._authNavStatusSource.next(this.isAuthenticated());
      }


    });
    */
  }

  async completeAuthentication() {
   // this.user = await this.manager.signinRedirectCallback();
   // this._authNavStatusSource.next(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    //return this.user != null && !this.user.expired;
    return true;
  }

  get authorizationHeaderValue(): string {
    //return `${this.user?.token_type} ${this.user?.access_token}`;
    return '';
  }

  get name1(): string {
    //if (this.user == null) return '';

    //return this.user.profile.nickname ?? '';

    return '';
  }

  Nome(): string {
    // return this.userAuth != null ? this.userAuth.nome : '';
    return '';
  }

  async signout(): Promise<void> {
    // await this.manager.signoutRedirect();
  }

  login() {
    //return this.manager.signinRedirect();
  }

  register(userRegistration: any) {
    //return this.http
    //  .post(environment.apiAuth + '/account', userRegistration)
    //  .pipe();

      return '';
  }

  getUserConfig(): UserAuth {
    // if (this.user == null) return null;
    return this.userAuth;
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  get name() {
    
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['name'];
  }

}

export const authConfig: AuthConfig = {
  issuer: 'https://seu-provedor-de-oauth.com',
  redirectUri: window.location.origin,
  clientId: 'seu-client-id',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  dummyClientSecret: ''
};


/*
export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5000',
    client_id: 'mvc.portal.evento-oidc',
    client_secret: 'secret',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    //response_type:'code id_token',
    scope: 'openid profile offline_access SGSWApi',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:52858/silent-refresh.html',
  };
}
  */
