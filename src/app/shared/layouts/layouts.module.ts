import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthHeaderComponent } from './auth-layout/auth-header/auth-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const components = [
  BlankLayoutComponent,
  AuthLayoutComponent,
  AuthHeaderComponent,
];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
