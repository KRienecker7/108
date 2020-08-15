import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoText = "";
  todoList = [];


  addTodo() {
    console.log("Add todo", this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }
}

