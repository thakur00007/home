import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreesComponent } from './degrees/degrees.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'degrees',
    pathMatch: 'full',
  },
  {
    path: 'degrees',
    component: DegreesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {}
