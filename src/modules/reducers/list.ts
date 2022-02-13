import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TodosListAction } from '../actions';
import {
    TODOS_LIST_FAILURE,
    TODOS_LIST_REQUEST,
    TODOS_LIST_SUCCESS,
    TODO_ADD_SUCCESS,
    TODO_DELETE_SUCCESS,
    TODO_EDIT_SUCCESS,
} from '../constants';

export interface TodosListState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    data?: Todo[];
    error?: AxiosError;
}

const initialState: TodosListState = {
    loading: false,
    success: false,
    failure: false,
};

export const TodosListReducer = (
    state: TodosListState = initialState,
    action: TodosListAction
): TodosListState => {
    switch (action.type) {
        case TODOS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                failure: false,
                error: undefined,
            };
        case TODOS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.data,
            };
        case TODOS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                success: false,
                error: action.error,
            };
        case TODO_ADD_SUCCESS:
            return {
                ...state,
                data: [...(state.data || []), action.todo],
            };
        case TODO_DELETE_SUCCESS:
            return {
                ...state,
                data: state.data?.filter((item: Todo) => item.id !== action.todo.id),
            };
        case TODO_EDIT_SUCCESS:
            return {
                ...state,
                data: state.data?.map((item: Todo) => (item.id === action.todo.id ? action.todo : item)),
            };
        default:
            return state;
    }
};
