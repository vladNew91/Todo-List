import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { todosReducer, TodosState } from './reducers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { TODOS_LIST_REQUEST, TODO_ADD_REQUEST, TODO_DELETE_REQUEST, TODO_EDIT_REQUEST } from './constants';
import { TodoAddRequestSaga, TodoDeleteRequestSaga, TodoEditRequestSaga, TodosListRequestSaga } from './sagas';

export * from './constants';
export * from './actions';
export * from './sagas';
export * from './selectors';
export * from './reducers';

export interface AppState {
    todos: TodosState;
}

const appReducer = combineReducers({
    todos: todosReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function* appSaga() {
    yield takeEvery(TODOS_LIST_REQUEST, TodosListRequestSaga);
    yield takeEvery(TODO_ADD_REQUEST, TodoAddRequestSaga);
    yield takeEvery(TODO_DELETE_REQUEST, TodoDeleteRequestSaga);
    yield takeEvery(TODO_EDIT_REQUEST, TodoEditRequestSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(appSaga);
