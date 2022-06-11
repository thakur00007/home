import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

const components = [LoginComponent];

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule],
  declarations: components,
  exports: components,
})
export class AuthModule {}
