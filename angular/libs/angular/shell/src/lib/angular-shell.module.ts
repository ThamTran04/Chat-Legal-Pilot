import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { angularShellRoutes } from './angular-shell.routes';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(angularShellRoutes)],
  exports: [RouterModule],
  declarations: [
    AuthLayoutComponent
  ],
})
export class AngularShellModule {}
