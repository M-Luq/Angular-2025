import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports:[FormsModule],
})
export class LoginComponent {

   form  = viewChild.required<NgForm>('form');
   private destroyRef = inject(DestroyRef);

   constructor(){
    afterNextRender(()=>{
       const savedForm = window.localStorage.getItem('loginForm');

       if(savedForm){
        const parsedForm = JSON.parse(savedForm);
        setTimeout(() =>{
          this.form().controls['email'].setValue(parsedForm.email);
        },1);
       }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next:(value) =>{
          window.localStorage.setItem('loginForm',JSON.stringify({email:value.email}));
        }
      });
      this.destroyRef.onDestroy(()=>subscription?.unsubscribe());
    });
   }

  onSubmit(formData:NgForm){
    if(formData.form.invalid){
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(enteredEmail,enteredPassword);

    formData.form.reset();
  }
}
