import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  //TODO Reformular como una lista de tareas
  task1:ITask={
    title:"Task 1",
    description:"Description 1",
    completed:false,
    level:Levels.Info
  }

  task2:ITask={
    title:"Task 2",
    description:"Description 2",
    completed:false,
    level:Levels.Blocking
  }

  task3:ITask={
    title:"Task 3",
    description:"Description 3",
    completed:true,
    level:Levels.Urgent
  }

  constructor(){}

  ngOnInit(): void {
      
  }

  deleteTaskList(task:ITask){
    //TODO Sustituir por un Splice para eliminar de la lista de tareas
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }

}
