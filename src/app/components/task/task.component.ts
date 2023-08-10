import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() task:ITask | undefined; //de padre a hijo
  @Output() deleteT: EventEmitter<ITask> = new EventEmitter<ITask>(); //de hijo a padre

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  deleteTask(){
    console.log("Eliminar tarea", this.task?.title);
    this.deleteT.emit(this.task);//Notificamos al componente superior la tarea a eliminar
  }

  volverHome(){
    this.router.navigate([''])
  }

}


