import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TodoEditAction } from '../actions';
import { TODO_EDIT_FAILURE, TODO_EDIT_REQUEST, TODO_EDIT_SUCCESS } from '../constants';

export interface TodoEditState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    error?: AxiosError;
    todo?: Todo;
}

const initialState: TodoEditState = {
    loading: false,
    success: false,
    failure: false,
};

export const TodoEditReducer = (state: TodoEditState = initialState, action: TodoEditAction): TodoEditState => {
    switch (action.type) {
        case TODO_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                failure: false,
                error: undefined,
            };
        case TODO_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                todo: action.todo,
            };
        case TODO_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                success: false,
                error: action.error,
            };
        default:
            return state;
    }
};
