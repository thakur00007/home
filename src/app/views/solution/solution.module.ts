import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { SolutionRoutingModule } from './solution-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { SafePipe } from '../../shared/services/util/safe.pipe';

@NgModule({
  declarations: [DashboardComponent, ListingComponent, SafePipe],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    LoadingBarModule,
    FormsModule,
    NgxSliderModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
})
export class SolutionModule {}
