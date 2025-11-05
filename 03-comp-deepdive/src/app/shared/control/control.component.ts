import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)' : 'onClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class.control--disabled')
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input<string>();

  private ele = inject(ElementRef)

  onClick() {
    console.log('clicked');
  }
  

}
