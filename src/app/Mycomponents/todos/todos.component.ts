import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string;
  
  constructor(){
    this.localItem=localStorage.getItem("todos")||""
    if(localStorage.getItem("todos")==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  deleteTodo(todo:Todo){
    console.log("Todo Delete triggered");
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log("Todo Add triggered");
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  checkTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
