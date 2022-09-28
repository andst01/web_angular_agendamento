import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    // this.authService.getUser();
  }

  redirectLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  redirectRegistrar() {
    this.router.navigate(['/registrar'], { replaceUrl: true });
  }

}
