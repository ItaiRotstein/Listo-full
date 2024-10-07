
import { legacy_createStore as createStore, combineReducers } from 'redux'

import {appReducer} from './reducers/app.reducer'
import {userReducer} from './reducers/user.reducer'
import {boardReducer} from './reducers/board.reducer'

export const rootReducer = combineReducers({
   userModule: userReducer,
   boardModule: boardReducer,
   appModule: appReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer)
