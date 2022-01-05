import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./todos/filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState{
    todos: Todo[],
    filter: string
}

export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}