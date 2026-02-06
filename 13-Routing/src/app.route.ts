import {  Routes } from "@angular/router";
import { TaskComponent } from "./app/tasks/task/task.component";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import {routes as userRoutes} from "./app/users/users.routes"
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const routes:Routes = [

    {
        path:'',
        component:NoTaskComponent
    },

    {
        path: 'users/:userId',//<your-domain>/users/<uid>
        component:UserTasksComponent,
        children:userRoutes
    },
    {
        path: '**',
        component:NotFoundComponent
    }

]