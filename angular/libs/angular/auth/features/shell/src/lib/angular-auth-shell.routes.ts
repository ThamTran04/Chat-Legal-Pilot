import { Routes } from '@angular/router';

export const angularAuthShellRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@angular/angular/auth/features/sign-in').then(
        (m) => m.AngularAuthFeaturesSignInModule
      ),
  },
];
