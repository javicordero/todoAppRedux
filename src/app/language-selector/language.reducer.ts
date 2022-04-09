import { createReducer, on } from '@ngrx/store'
import * as actions from './language.actions'

export const initialState: string = 'es'

const _languageReducer = createReducer(
  initialState,

  on(actions.changeLanguage, (state, { language }) => {
    return language
  })
)

export function languageReducer(state: any, action: any) {
  return _languageReducer(state, action)
}
