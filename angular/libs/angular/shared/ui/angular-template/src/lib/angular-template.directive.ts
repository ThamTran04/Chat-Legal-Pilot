import { Directive, Input, TemplateRef } from '@angular/core';
import { AngularTemplate } from './angular-template.type';

@Directive({
  selector: 'ng-template[angularTemplate]',
})
export class AngularTemplateDirective {
  @Input() set angularTemplate(value: AngularTemplate) {
    if (!value) {
      throw new Error('Template cannot be empty');
    }

    this._template = value;
  }

  private _template!: AngularTemplate;
  get template(): AngularTemplate {
    return this._template;
  }

  constructor(public readonly angularTemplateRef: TemplateRef<unknown>) {}
}
