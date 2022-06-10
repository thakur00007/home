import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  config: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    /**
     * Angular Router lazy loading
     */
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.config.isLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.config.isLoading = false;
      }
    });
  }
}
