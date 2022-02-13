import { AxiosError } from 'axios';
import { Action } from 'redux';
import { Todo } from '../../types';
import { TodoAddSuccess, TodoDeleteSuccess, TodoEditSuccess } from '../actions';
import { TODOS_LIST_FAILURE, TODOS_LIST_REQUEST, TODOS_LIST_SUCCESS } from '../constants';

export interface TodosListRequest extends Action {
    type: typeof TODOS_LIST_REQUEST;
}

export interface TodosListSuccess extends Action {
    type: typeof TODOS_LIST_SUCCESS;
    data: Todo[];
}

export interface TodosListFailure extends Action {
    type: typeof TODOS_LIST_FAILURE;
    error: AxiosError;
}

export type TodosListAction =
    | TodosListRequest
    | TodosListSuccess
    | TodosListFailure
    | TodoAddSuccess
    | TodoDeleteSuccess
    | TodoEditSuccess;

export const todosListRequest = (): TodosListRequest => ({ type: TODOS_LIST_REQUEST });

export const todosListSuccess = (data: Todo[]): TodosListSuccess => ({
    type: TODOS_LIST_SUCCESS,
    data,
});

export const todosListFailure = (error: AxiosError): TodosListFailure => ({
    type: TODOS_LIST_FAILURE,
    error,
});
