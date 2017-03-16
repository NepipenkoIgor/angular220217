import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive(
  {
    selector: '[appDelay]'
  }
)
export class DelayDirective {

  @Input()
  public appDelay: number;

  public constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {

  }

  public ngOnInit(): void {
    setTimeout(
      () => {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }, 500 * this.appDelay
    );
  }
}
