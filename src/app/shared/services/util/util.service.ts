import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';
declare var $: any;
declare var gsap: any;

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  /**
   * Toaster display utility service (Error)
   */
  public handleError(error: any): Promise<any> {
    return Toastify({
      text: error,
      duration: 3000,
      close: true,
      // destination: 'https://github.com/apvarun/toastify-js',
      newWindow: true,
      avatar: 'https://image.flaticon.com/icons/png/512/753/753345.png',
      gravity: 'bottom',
      position: 'center',
      className: 'danger shadow-lg font-weight-bold',
      stopOnFocus: true,
      onClick(): any {},
    }).showToast();
  }

  /**
   * Toaster display utility service (Success)
   */
  public handleSuccess(success: any): Promise<any> {
    return Toastify({
      text: success,
      duration: 3000,
      close: true,
      avatar: 'https://image.flaticon.com/icons/png/512/753/753318.png',
      gravity: 'bottom',
      position: 'center',
      className: 'success shadow-lg font-weight-bold',
      stopOnFocus: true,
      onClick(): any {},
    }).showToast();
  }

  /**
   * Toaster display utility service (Warning)
   */
  public handleWarning(warning: any): Promise<any> {
    return Toastify({
      text: warning,
      duration: 3000,
      close: true,
      avatar: 'https://image.flaticon.com/icons/png/512/595/595067.png',
      gravity: 'bottom',
      position: 'center',
      className: 'warning shadow-lg font-weight-bold',
      stopOnFocus: true,
      onClick(): any {},
    }).showToast();
  }

  /**
   * Toaster display utility service (Info)
   */
  /**
   * Toaster display utility service (Warning)
   */
  public handleInfo(info: any): Promise<any> {
    return Toastify({
      text: info,
      duration: 3000,
      close: true,
      avatar: 'https://image.flaticon.com/icons/png/512/1014/1014693.png',
      gravity: 'bottom',
      position: 'center',
      className: 'info shadow-lg font-weight-bold',
      stopOnFocus: true,
      onClick(): any {},
    }).showToast();
  }

  /**
   * CkEditor Configuration helper
   */
  public ckEditorConfig(): any {
    return {
      toolbarGroups: [
        {
          name: 'basicstyles',
          groups: ['basicstyles'],
        },
        {
          name: 'links',
          groups: ['links'],
        },
        {
          name: 'paragraph',
          groups: ['list', 'blocks'],
        },
        {
          name: 'document',
          groups: ['mode'],
        },
        {
          name: 'insert',
          groups: ['insert'],
        },
        {
          name: 'styles',
          groups: ['styles'],
        },
      ],
      removeButtons: 'Subscript,Superscript,Image,Styles,Specialchar,Copy,Paste,Table,Paste Spell Checker',
    };
  }

  /**
   * Toaster display utility service (Error)
   */
  public handleLogout(): any {
    return Toastify({
      text: 'Credentials has been expired. Redirecting to login..',
      duration: 1500,
      close: true,
      gravity: 'bottom',
      position: 'center',
      className: 'danger shadow-lg font-weight-bold',
      stopOnFocus: true,
      onClick(): any {},
    }).showToast();
  }

  /**
   * File Size Formatter
   */
  public fileSizeFormatter(bytes, decimals = 2): any {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
