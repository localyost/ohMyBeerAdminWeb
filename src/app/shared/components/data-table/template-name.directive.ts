import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTemplateName]'
})
export class TemplateNameDirective {

  @Input('appTemplateName')
  public templateName?: string;

  constructor(public readonly template: TemplateRef<any>) { }
}
