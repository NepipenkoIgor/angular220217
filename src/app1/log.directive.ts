import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive(
  {
    selector: 'input[appLog]'
  }
)
export class LogDirective {

  @HostListener(
    'input',
    [
      '$event'
    ]
  )
  public onInput(event: KeyboardEvent): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    console.info(input.value);
  }

}
