import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

export default function configureStore(history, initialState = {}) {
  const navMiddleware = createReactNavigationReduxMiddleware("root", state => state.nav);

  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [
    navMiddleware,
    sagaMiddleware,
    logger,
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
