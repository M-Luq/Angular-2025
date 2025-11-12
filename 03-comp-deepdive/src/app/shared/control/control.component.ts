import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class.control--disabled')
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>;

   ngAfterContentInit() {
    console.log("after content init called");
    console.log(this.control());
       
   }

  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(() => {
      console.log("after render called");
      console.log(this.control());
    });

    afterNextRender(() => {
      console.log("after next render called");
      console.log(this.control());
    });
  }
  label = input.required<string>();

  private ele = inject(ElementRef)

  onClick() {
    console.log('clicked');
    console.log(this.ele);
    console.log(this.control());
  }
  

}
