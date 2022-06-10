import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';

const components = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
