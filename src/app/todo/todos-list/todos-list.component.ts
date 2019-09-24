import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todosList: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {

      this.todosList = state.todos;
      console.log(this.todosList);


    });
  }

}
