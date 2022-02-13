import { Action } from 'redux';
import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TODO_EDIT_FAILURE, TODO_EDIT_REQUEST, TODO_EDIT_SUCCESS } from '../constants';

export interface TodoEditRequest extends Action {
    type: typeof TODO_EDIT_REQUEST;
    todo: Todo;
}

export interface TodoEditSuccess extends Action {
    type: typeof TODO_EDIT_SUCCESS;
    todo: Todo;
}

export interface TodoEditFailure extends Action {
    type: typeof TODO_EDIT_FAILURE;
    error: AxiosError;
}

export type TodoEditAction = TodoEditRequest | TodoEditSuccess | TodoEditFailure;

export const todoEditRequest = (todo: Todo): TodoEditRequest => ({
    type: TODO_EDIT_REQUEST,
    todo,
});

export const todoEditSuccess = (todo: Todo): TodoEditSuccess => ({
    type: TODO_EDIT_SUCCESS,
    todo,
});

export const todoEditFailure = (error: AxiosError): TodoEditFailure => ({
    type: TODO_EDIT_FAILURE,
    error,
});
