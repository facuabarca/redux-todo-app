import { AppState } from './../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleTodoAllAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    console.log(this.completado);
    const action =  new ToggleTodoAllAction(this.completado);
    this.store.dispatch(action);
  }


}
