import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxSocialLoginModule } from 'ngx-social-login';
import { RecaptchaModule } from 'ng-recaptcha';
import { environment } from '../../../environments/environment.hmr';

const components = [LoginComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    LoadingBarModule,
    RecaptchaModule,
    NgxSocialLoginModule.init({
      google: {
        client_id: environment.googleOAuthKey,
      },
    }),
  ],
  declarations: components,
  exports: components,
})
export class AuthModule {}
