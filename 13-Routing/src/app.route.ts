import {CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import {routes as userRoutes} from "./app/users/users.routes"
import { NotFoundComponent } from "./app/not-found/not-found.component";
import { inject } from "@angular/core";

export const dummyMatch : CanMatchFn = (route,segments) => {
    const router = inject(Router);
    const value = Math.random();
    if(value<0.5){
        return true;
    }
    return new RedirectCommand(router.parseUrl("/unauthorised"));
}

export const routes:Routes = [

    {
        path:'',
        component:NoTaskComponent
    },

    {
        path: 'users/:userId',//<your-domain>/users/<uid>
        component:UserTasksComponent,
        canMatch:[dummyMatch],
        children:userRoutes,
        data:{
            message:"Hello!"
        },
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component:NotFoundComponent
    }

]


