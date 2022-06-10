import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient, private util: UtilService) {}

  /**
   * Return file Upload Response (S3 Bucket) <Metadata>
   */
  async fileUploader(file): Promise<any> {
    const data = new FormData();
    data.append('file', file);
    data.append('file_type', file.type);
    return this.http
      .post(environment.apiUrl + '/user/file/upload', data)
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
   * Return Downloadable File Content <signed URL>
   */
  async fileDownloader(fileCode): Promise<any> {
    this.util.handleInfo('File will start downloading automatically...');
    return this.http
      .post(environment.apiUrl + '/user/file/download', fileCode)
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
