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

        case fromTodo.TOGGLE_TODO: {
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            } );
        }

        case fromTodo.EDITAR_TODO: {
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        }

        default:
         return state;
    }

}
