import { Injectable, NgZone } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util/util.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;
  public redirectUrl: string;
  userDetails: any = {};

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private util: UtilService
  ) {
    this.checkAuth();
  }

  /**
   * Check status if current user is logged in or not
   */
  checkAuth(): any {
    if (this.cookieService.get('ss-customer-session')) {
      this.authenticated = true;
    }
  }

  /**
   * Return formatted current user object stored in cookie
   */
  async getUserDetails(): Promise<any> {
    this.userDetails.flag = false;
    if (this.cookieService.get('ss-customer-session')) {
      const jwt = this.cookieService.get('ss-customer-session');
      this.userDetails = jwt_decode(jwt);
      this.userDetails = {
        ...this.userDetails,
        flag: true,
      };
      return await this.userDetails;
    } else {
      this.signOut();
    }
  }

  /**
   * Signing user by API
   */
  async signIn(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/login', request)
      .toPromise()
      .then((response) => {
        if (response['appcode'] !== 50003) {
          this.util.handleError(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }

  /**
   * Signing user by API
   */
  async formRedirect(): Promise<any> {
    this.authenticated = true;
    this.ngZone.run(() => {
      if (this.redirectUrl) {
        this.router.navigateByUrl(this.redirectUrl);
      } else {
        this.router.navigate(['/solution/list']);
      }
    });
  }

  /**
   * Register user by API
   */
  async register(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + request.endpoint, request.data)
      .toPromise()
      .then((response) => {
        if (response['appcode'] !== 50003) {
          this.util.handleError(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }

  /**
   * Signing out user by destroying session cookie
   */
  signOut = () => {
    this.authenticated = false;
    this.redirectUrl = '';
    this.cookieService.remove('ss-customer-session');
    if (localStorage.getItem('ss-customer-utm')) {
      localStorage.removeItem('ss-customer-utm');
    }
    this.router.navigate(['/auth/register']);
  };

  /**
   * Return authToken saved in cookie
   */
  getToken = () => {
    return this.cookieService.get('ss-customer-session');
  };

  /**
   * Reset Password Request by User
   */
  async resetPassword(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/reset/password/validate', request)
      .toPromise()
      .then((response) => {
        if (response['appcode'] !== 50003) {
          this.util.handleError(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }

  /**
   * send OTP for password reset
   */
  async sendOTP(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/reset/password/request', request)
      .toPromise()
      .then((response) => {
        if (response['appcode'] !== 50003) {
          this.util.handleError(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }
}
