import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [NotFoundComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
