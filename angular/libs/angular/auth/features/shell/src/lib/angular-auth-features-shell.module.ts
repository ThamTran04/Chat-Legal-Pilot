import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { angularAuthShellRoutes } from './angular-auth-shell.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(angularAuthShellRoutes)],
})
export class AngularAuthFeaturesShellModule {}
