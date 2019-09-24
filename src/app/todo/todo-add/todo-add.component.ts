import * as fromTodoAction from './../todo.actions';
import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if ( this.txtInput.invalid ) {
      return;
    }
    const action = new fromTodoAction.AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(action);
    this.txtInput.setValue('');
  }

}
