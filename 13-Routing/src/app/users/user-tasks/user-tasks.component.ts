import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  //userId = input.required<string>();
  userName = input.required<string>();
  message = input.required<string>();
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  //userName = computed(()=> this.usersService.users.find(u => u.id === this.userId())?.name);

  // ngOnInit(){
  //   console.log("Input data:"+ this.message);
  //   console.log(this.activatedRoute);
  //   const subscription =this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) =>{
  //      this.userName = this.usersService.users.find((u)=> u.id === paramMap.get('userId'))?.name || '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  // }
}

export const resolveUserName:ResolveFn<string> = (activatedRoute:ActivatedRouteSnapshot, 
  routerState: RouterStateSnapshot) =>
  {
  const usersService =inject(UsersService) ; // angular will inject it
  const userName = usersService.users.find((u)=> u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}

export const resolveTitle:ResolveFn<string> = (
  activatedRoute, 
  routerState) =>{
    return resolveUserName(activatedRoute,routerState)+"\'s Task"

    
  }
