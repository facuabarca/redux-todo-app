import { Todo } from './models/todo.model';
import * as fromTodo from './todo.actions';

const todo1 = new Todo('Limpiar la habitación');
const todo2 = new Todo('Salir a correr');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

    switch ( action.type ) {

        case fromTodo.AGREGAR_TODO: {
            const todo = new Todo(action.payload);
            return [...state, todo];
        }

        default:
         return state;
    }

}
