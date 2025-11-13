import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
 data = input.required<Ticket>();
 close = output();
 detailVisible = signal(false);

 onToggleDetails() {
   //this.detailVisible.set(!this.detailVisible());
   this.detailVisible.update((wasVisible) => !wasVisible);//angular automatically sends the old value here
 }

 onMarkAsCompleted(){
  this.close.emit();
 }
}
