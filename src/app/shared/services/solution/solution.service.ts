import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  constructor(private http: HttpClient, private util: UtilService) {}

  /**
   * Return available solution list
   */
  async fetchFormList(): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/question/submission/list', {})
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
   * Return solution instance with code
   */
  async manageFormInstance(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/solution/submit', request)
      .toPromise()
      .then((response) => {
        if (response['appcode'] !== 50003) {
          this.util.handleError(response['message']);
        } else {
          this.util.handleSuccess(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }

  /**
   * Discard solution instance with code
   */
  async discardFormInstance(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/solution/discard', request)
      .toPromise()
      .then((response) => {
        if (response['appcode'] === 50003) {
          this.util.handleSuccess(response['message']);
        } else {
          this.util.handleError(response['message']);
        }
        return response;
      })
      .catch((error) => {
        this.util.handleError(error.message);
      });
  }

  /**
   * List Form Question
   */
  async fetchFormQuestion(request): Promise<any> {
    return this.http
      .post(environment.apiUrl + '/user/solution/questions/display', request)
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
   * List Video Content
   */
  async fetchVideosList(): Promise<any> {
    return this.http
      .get('https://demo7389246.mockable.io' + '/video/list', {})
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
