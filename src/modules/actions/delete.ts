import { AxiosError } from 'axios';
import { Action } from 'redux';
import { Todo } from '../../types';
import { TODO_DELETE_REQUEST, TODO_DELETE_SUCCESS, TODO_DELETE_FAILURE } from '../constants';

export interface TodoDeleteRequest extends Action {
    type: typeof TODO_DELETE_REQUEST;
    todo: Todo;
}

export interface TodoDeleteSuccess extends Action {
    type: typeof TODO_DELETE_SUCCESS;
    todo: Todo;
}

export interface TodoDeleteFailure extends Action {
    type: typeof TODO_DELETE_FAILURE;
    error: AxiosError;
}

export type TodoDeleteAction = TodoDeleteRequest | TodoDeleteSuccess | TodoDeleteFailure;

export const todoDeleteRequest = (todo: Todo): TodoDeleteRequest => ({
    type: TODO_DELETE_REQUEST,
    todo,
});

export const todoDeleteSuccess = (todo: Todo): TodoDeleteSuccess => ({
    type: TODO_DELETE_SUCCESS,
    todo,
});

export const todoDeleteFailure = (error: AxiosError): TodoDeleteFailure => ({
    type: TODO_DELETE_FAILURE,
    error,
});
