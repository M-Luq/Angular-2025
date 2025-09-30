import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<Data>();

  //the angular takes of input conversion to number from string
  //by using ngModel with number type input
  //we can also use the + operator to convert string to number
  //but that is not needed here

  initialInvestment:number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  constructor(private investmentService: InvestmentService) {}


  onSubmit(){
    console.log("submitted");


    // this.calculate.emit({
    //   initialInvestment: this.initialInvestment,
    //   annualInvestment: this.annualInvestment,
    //   expectedReturn: this.expectedReturn,
    //   duration: this.duration
    // });

    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });

    this.initialInvestment=0;
    this.annualInvestment=0;
    this.expectedReturn=5;
    this.duration=10;
  }
}
