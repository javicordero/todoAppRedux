import { createReducer, on } from '@ngrx/store'
import { Todo } from './models/todo.model'
import * as actions from './todo.actios'

export const initialState: Todo[] = [new Todo('Tarea1'), new Todo('Tarea2')]

const _todoReducer = createReducer(
  initialState,

  on(actions.addTodo, (state, { texto }) => {
    return [...state, new Todo(texto)]
  }),

  on(actions.toggleTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        completado: !todo.completado,
      }
    })
  }),

  on(actions.editTodo, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        texto: texto,
      }
    })
  }),

  on(actions.toggleAllTodos, (state, { value }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: value,
      }
    })
  }),

  on(actions.deleteTodo, (state, { id }) => {
    return state.filter((todo) => todo.id !== id)
  }),

  on(actions.clearCompleted, (state) => {
    return state.filter((todo) => !todo.completado)
  })
)

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action)
}
