import { createAction, props } from '@ngrx/store'

export const addTodo = createAction('[Todo] Añadir', props<{ texto: string }>())

export const toggleTodo = createAction('[Todo] Toggle', props<{ id: number }>())

export const editTodo = createAction('[Todo] EdtiTodo', props<{ id: number; texto: string }>())

export const toggleAllTodos = createAction('[Todo] Toggle All', props<{ value: boolean }>())

export const deleteTodo = createAction('[Todo] Delete', props<{ id: number }>())

export const clearCompleted = createAction('[Todo] ClearCompleted')
