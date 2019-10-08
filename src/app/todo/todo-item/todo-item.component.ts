import { AppState } from './../../app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  checkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  @ViewChild('txtInputFisico', null) txtFisico: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);

    this.checkField.valueChanges.subscribe( value => {
      const action = new todoActions.ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar(): void {
    this.editando = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, (1));
  }

  terminarEdicion(): void{
    this.editando = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    const action = new todoActions.EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);

  }

  borrarTodo(): void {
    const action = new todoActions.EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
