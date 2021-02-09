import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [{ content: 'todo1', completed: false },
    { content: 'todo2', completed: false },
    { content: 'todo3', completed: false }];

  }



  addTodo() {
    if (this.inputTodo === "")
      return;

    this.todos.push(
      {
        content: this.inputTodo,
        completed: false

      }
    );
    this.inputTodo = "";
  }


  isDoneOrNot(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });

  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((v, i) => {
      return i !== id;
    })

  }

}
