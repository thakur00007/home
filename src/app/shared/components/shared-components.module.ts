import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

const components = [];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
