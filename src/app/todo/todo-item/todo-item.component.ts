import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, (1));
  }

  terminarEdicion() {
    this.editando = false;
  }

}
