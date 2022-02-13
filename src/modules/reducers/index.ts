import { combineReducers } from 'redux';
import { TodoAddReducer, TodoAddState } from './add';
import { TodoEditReducer, TodoEditState } from './edit';
import { TodosListReducer, TodosListState } from './list';
import { TodoDeleteReducer, TodoDeleteState } from './delete';

export interface TodosState {
    list: TodosListState;
    add: TodoAddState;
    delete: TodoDeleteState;
    edit: TodoEditState;
}

export const todosReducer = combineReducers({
    list: TodosListReducer,
    add: TodoAddReducer,
    delete: TodoDeleteReducer,
    edit: TodoEditReducer,
});
