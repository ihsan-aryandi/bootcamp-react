import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

import createEncryptor from 'redux-persist-transform-encrypt'

const encryptor = createEncryptor({
  secretKey: 'sshhhhhhhhh',
  onError: function(error) {
    console.log(error)
  }
})

const persistedReducers = persistReducer({
  key: 'root',
  storage,
  transforms: [encryptor]
}, rootReducer)

export default () => {
  let store = createStore(persistedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  let persistor = persistStore(store)
  return { store, persistor }
}