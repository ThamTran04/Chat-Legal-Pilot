import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthWrapperComponent],
  exports: [AuthWrapperComponent],
})
export class AngularAuthFeaturesUiAuthWrapperModule {}
