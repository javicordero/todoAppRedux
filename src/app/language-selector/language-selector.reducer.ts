import { createReducer, on } from '@ngrx/store'
import * as actions from './language-selector.actions'

export const initialState: string = 'es'

const _languageSelectorReducer = createReducer(
  initialState,

  on(actions.changeLanguage, (state, { language }) => {
    return language
  })
)

export function languageSelectorReducer(state: any, action: any) {
  return _languageSelectorReducer(state, action)
}
