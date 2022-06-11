import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const components = [
  LayoutComponent
];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class LayoutModule { }
