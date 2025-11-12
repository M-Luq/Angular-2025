import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit {
  @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(){
    console.log("on init called");
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log("after view init called")
    console.log(this.form?.nativeElement);
   }

  onSubmit(title: string,request: string) {
    console.log(title);
    console.log(title,request);// to log as object
    this.form?.nativeElement.reset();// to reset the form after submission
  }
}
