import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // content of ng template
  private viewContainerRef = inject(ViewContainerRef);// place in dom where this directive is used
  constructor() {
    effect(()=>{
      if(this.authService.activePermission()== this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();      
      }
    }); // this run when signal value changes
   }

}
