import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: string = 'all';
 
const _filterReducer = createReducer(
  initialState,


  on(actions.changeFilter, (state, {filter}) => {
        return filter
  }),




);
 
export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}