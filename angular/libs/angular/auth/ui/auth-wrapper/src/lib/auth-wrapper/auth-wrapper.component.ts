import {
  Component,
  ChangeDetectionStrategy,
  AfterContentInit,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { AngularTemplateDirective } from '../../../../../../shared/ui/angular-template/src/lib/angular-template.directive';
import { Destroyable } from '../../../../../../shared/ui/destroyable/src/index';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'angular-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent
  extends Destroyable
  implements AfterContentInit
{
  @Input() title!: string;

  @ContentChildren(AngularTemplateDirective)
  templates!: QueryList<AngularTemplateDirective>;

  contentTemplate?: TemplateRef<unknown>;

  ngAfterContentInit(): void {
    this.templates.changes
      .pipe(startWith(this.templates), takeUntil(this.$destroy))
      .subscribe((templates: AngularTemplateDirective[]) => {
        templates.forEach(({ template, angularTemplateRef }) => {
          switch (template) {
            case 'content':
              this.contentTemplate = angularTemplateRef;
              break;
          }
        });
      });
  }
}
