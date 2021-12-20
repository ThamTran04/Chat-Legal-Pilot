import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTemplateDirective } from './angular-template.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularTemplateDirective],
  exports: [AngularTemplateDirective],
})
export class AngularSharedUiAngularTemplateModule {}
