import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { window } from 'rxjs/operators';
//import { UserConfig } from '../_models/UserConfig';
import { environment } from '../../environments/environment';
import { AuthService } from '../_services/auth.service';
import { UserAuth } from '../_models/UserAuth';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient) { }

    nome: string | undefined;
    userAuth: UserAuth | undefined;


  ngOnInit() {
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  loggedin() {


    const valida = this.authService.isAuthenticated();
    this.userAuth = this.authService.getUserConfig();

    //return !!valida;
    return true;
  }

  isAdmin() {
    if (this.userAuth?.perfil == "Admin")
      return true;

    //return false;
    return true;
  }

  logout() {
    localStorage.removeItem("user");
    this.http.post(environment.apiLocal + 'api/Home/logout', null).subscribe(result => {
      document.location.reload();
    }, error => { document.location.reload(); });

  }

  getNome(): string{
    return this.authService.Nome();
  }

}
