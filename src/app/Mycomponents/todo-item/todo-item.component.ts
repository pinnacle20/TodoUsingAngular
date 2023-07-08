import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheck:EventEmitter<Todo>=new EventEmitter();

  onClick(todo:Todo){
    console.log("onClick pressed");
    this.todoDelete.emit(todo);
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheck.emit(todo);
  }
}
