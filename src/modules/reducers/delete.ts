import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TodoDeleteAction } from '../actions';
import { TODO_DELETE_FAILURE, TODO_DELETE_REQUEST, TODO_DELETE_SUCCESS } from '../constants';

export interface TodoDeleteState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    error?: AxiosError;
    todo?: Todo;
}

const initialState: TodoDeleteState = {
    loading: false,
    success: false,
    failure: false,
};

export const TodoDeleteReducer = (
    state: TodoDeleteState = initialState,
    action: TodoDeleteAction
): TodoDeleteState => {
    switch (action.type) {
        case TODO_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                failure: false,
                todo: action.todo,
                error: undefined,
            };
        case TODO_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                todo: action.todo,
            };
        case TODO_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                failure: true,
                error: action.error,
            };
        default:
            return state;
    }
};
