import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
  ],
  declarations: [SignInComponent],
})
export class AngularAuthFeaturesSignInModule {}
