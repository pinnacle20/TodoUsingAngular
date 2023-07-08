import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  title:string;
  desc:string;

  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  
  onClick(){
    console.log("Add Todo triggered");
  }
  onSubmit(){
    console.log("Submit Triggered")
    const todo={
      title:this.title,
      desc:this.desc,
      active:true 
    }
    this.todoAdd.emit(todo)
  }
}
