import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // checking and setting url params to localStorage for SFDC
    if (route.queryParams && Object.keys(route.queryParams).length > 1 && environment.production) {
      const queryParams = JSON.parse(JSON.stringify(route.queryParams));
      queryParams['environment'] = environment.environmentName === 'hmr' ? 'development' : environment.environmentName;
      queryParams['formId'] = route.queryParams.formId ? atob(route.queryParams['formId']) : 'NA';
      const stringifyObject = JSON.stringify(queryParams);
      const encodedQueryParams = window.btoa(stringifyObject);
      localStorage.setItem('ss-customer-utm', encodedQueryParams);
    }
    const url: string = state.url;
    return this.checkLogin(url);
  }

  /**
   * Checking if user has logged in credentials
   * @Tamaghna
   */
  checkLogin(url: string): boolean {
    if (this.auth.authenticated) {
      return true;
    }
    this.auth.redirectUrl = url;
    this.router.navigate(['/others/access-denied']);
    return false;
  }
}
