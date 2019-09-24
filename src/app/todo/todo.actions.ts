import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar una tarea';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public payload: string) { }
}

export type Acciones = AgregarTodoAction;
