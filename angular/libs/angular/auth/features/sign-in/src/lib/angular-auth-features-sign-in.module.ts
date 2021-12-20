import { AngularAuthFeaturesUiAuthWrapperModule } from './../../../../ui/auth-wrapper/src/lib/angular-auth-features-ui-auth-wrapper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSharedUiAngularTemplateModule } from '@angular/angular/shared/ui/angular-template';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
    AngularAuthFeaturesUiAuthWrapperModule,
    ReactiveFormsModule,
    AngularSharedUiAngularTemplateModule
  ],
  declarations: [SignInComponent],
})
export class AngularAuthFeaturesSignInModule {}
