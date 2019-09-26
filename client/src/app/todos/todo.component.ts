import {Component, OnInit} from '@angular/core';
import {UserListService} from './user-list.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todo-component',
  styleUrls: ['./todo.component.css'],
  templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
  public todo: Todo = null;

  constructor() {
  }


  ngOnInit() {
  }
}
