import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankLayoutComponent } from './shared/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthModule } from './views/auth/auth.module';
import { OthersModule } from './views/others/others.module';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { SolutionModule } from './views/solution/solution.module';

const authRoutes: Routes = [
  {
    path: 'solution',
    loadChildren: () => SolutionModule
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => AuthModule
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => OthersModule
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
    children: authRoutes
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
