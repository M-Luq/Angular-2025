import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksServices } from './app/tasks/tasks.services';
import { InjectionToken } from '@angular/core';

export const TasksServiceToken = new InjectionToken<TasksServices>('tasks-service-token');

bootstrapApplication(AppComponent,{
    providers:[{provide:TasksServiceToken,useClass:TasksServices}],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
