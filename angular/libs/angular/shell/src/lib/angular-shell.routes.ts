import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const angularShellRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [],
  },
  {
    path: '',
    loadChildren: () =>
      import('@angular/angular/auth/features/shell').then(
        (m) => m.AngularAuthFeaturesShellModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
