import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { DegreesComponent } from './degrees/degrees.component';

@NgModule({
  declarations: [DegreesComponent],
  imports: [CommonModule, FrontRoutingModule],
})
export class FrontModule {}
