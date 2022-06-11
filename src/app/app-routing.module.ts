import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthModule } from './views/auth/auth.module';
import { OthersModule } from './views/others/others.module';

const authRoutes: Routes = [];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => AuthModule
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => OthersModule
      }
    ]
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
