import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(this.authService.isAuthenticated());

    if (this.authService.isAuthenticated()) {
      console.log(this.authService.isAuthenticated());
      return true;
    }

   // console.log(state.url)
    this.router.navigate(["/auth-callback"], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
  
}
