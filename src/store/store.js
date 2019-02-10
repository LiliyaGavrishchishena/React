import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from '../redux/menu/menuReducer';
import categoriesReducer from '../redux/categories/categoriesReducer';
import cartReducer from '../redux/cart/cartReducer';
import entityReducer from '../redux/entityReducer';
import authReducer from '../redux/auth/authReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart',
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  isModalOpen: '',
  entities: entityReducer,
  auth: persistReducer(sessionPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
