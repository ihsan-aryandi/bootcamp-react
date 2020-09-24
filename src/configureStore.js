import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const config = {
  key: 'root',
  storage
}

const persistedReducers = persistReducer(config, rootReducer)

export default () => {
  let store = createStore(persistedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  let persistor = persistStore(store)
  return { store, persistor }
}