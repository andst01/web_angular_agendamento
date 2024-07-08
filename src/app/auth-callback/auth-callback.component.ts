import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {


  public error: boolean = false;
  //objError: boolean;
  constructor(private authService: AuthService,
    //private errorTeste: boolean,
    //private testeError: boolean,
    private router: Router,
    private activeRoute: ActivatedRoute) {

  }
  async ngOnInit() {
    if (this.activeRoute.snapshot.fragment != null && this.activeRoute.snapshot.fragment.indexOf('error') >= 0) {
       this.error = true;
      return;
    }

    await this.authService.completeAuthentication();
    this.router.navigate(['/registrar'], { replaceUrl: true });

  }

}
