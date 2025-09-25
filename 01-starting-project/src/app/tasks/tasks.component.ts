import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { type NewTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!:string;
 @Input({required: true}) name!:string;
 isAddingTask=false;
 
 // we are using private here just to create a property automatically in the class
 constructor(private tasksService:TaskService){
 }
 
 

get selectedUserTasks(){
  return  this.tasksService.getUserTasks(this.userId);
}



onAddTask(){
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}

}
