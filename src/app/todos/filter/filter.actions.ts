import { createAction, props } from '@ngrx/store';

export const changeFilter = createAction(
    '[Todo] ChangeFilter', 
    props<{filter: string}>()
)