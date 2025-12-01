import { Directive } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)' : 'onLog()'
  }
})
export class LogDirective {

  constructor() { }

  onLog() {
    console.log('Element clicked');
  }

}
