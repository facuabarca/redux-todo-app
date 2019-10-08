import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar una tarea';
export const TOGGLE_TODO = '[TODO] Toggle tarea';
export const EDITAR_TODO = '[TODO] Editar Todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public payload: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) {}
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction;
