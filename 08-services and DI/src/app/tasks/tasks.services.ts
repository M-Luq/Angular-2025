import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//   providedIn: 'root',
// })

export class TasksServices {

    private tasks = signal<Task[]>([]); // to make it not readable from other side and only be used by service to modify it.
    private loggingService = inject(LoggingService)
    allTasks = this.tasks.asReadonly();
    addTask(taskData:{ title:string, description:string}) {
        const newTask:Task = {
            ...taskData,id: Math.random().toString(),
            status:'OPEN'
        };
        this.tasks.update((oldTasks)=> [...oldTasks,newTask]);
        this.loggingService.log('Added Task' + taskData.title)
        
    }

    updateTaskStatus(taskId:string,newStatus: TaskStatus){
        this.tasks.update((oldTasks)=> oldTasks.map((task)=> task.id === taskId ? {...task,status:newStatus}: task))
        this.loggingService.log('Updated Task' + taskId + ' to status ' + newStatus);
    } 
}