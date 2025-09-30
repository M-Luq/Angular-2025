import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type{ Data } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculate = output<Data>();

  initialInvestment:number = signal(0);
  annualInvestment: number = signal(0);
  expectedReturn: number = signal(5);
  duration: number = signal(10);


  onSubmit(){
    console.log("submitted");

    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration()
    });
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}
