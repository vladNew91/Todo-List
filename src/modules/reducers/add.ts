import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TodoAddAction } from '../actions';
import { TODO_ADD_FAILURE, TODO_ADD_REQUEST, TODO_ADD_SUCCESS } from '../constants';

export interface TodoAddState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    error?: AxiosError;
    todo?: Todo;
}

const initialState: TodoAddState = {
    loading: false,
    success: false,
    failure: false,
};

export const TodoAddReducer = (state: TodoAddState = initialState, action: TodoAddAction): TodoAddState => {
    switch (action.type) {
        case TODO_ADD_REQUEST:
            return {
                ...state,
                loading: true,
                failure: false,
                success: false,
                error: undefined,
            };
        case TODO_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                todo: action.todo,
            };
        case TODO_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                error: action.error,
            };
        default:
            return state;
    }
};
