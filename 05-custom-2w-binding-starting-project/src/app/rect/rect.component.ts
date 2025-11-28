import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({required:true}) size!: {
  //   width:string,
  //   height:string
  // }

  // @Output() sizeChange = new EventEmitter<{
  //   width:string,
  //   height:string
  // }>();

  // moder version

  size = model.required<{width:string; height:string}>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100'
    // });

    this.size.set({
      width: '200',
      height: '100'
    }); // if you change set to update it won't work because it will expect a initial value in model you defined 
    
  }
}
