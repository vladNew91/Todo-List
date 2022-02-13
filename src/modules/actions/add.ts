import { Action } from 'redux';
import { AxiosError } from 'axios';
import { Todo } from '../../types';
import { TODO_ADD_FAILURE, TODO_ADD_REQUEST, TODO_ADD_SUCCESS } from '../constants';

export interface TodoAddRequest extends Action {
    type: typeof TODO_ADD_REQUEST;
    todo: Todo;
}

export interface TodoAddSuccess extends Action {
    type: typeof TODO_ADD_SUCCESS;
    todo: Todo;
}

export interface TodoAddFailure extends Action {
    type: typeof TODO_ADD_FAILURE;
    error: AxiosError;
}

export type TodoAddAction = TodoAddRequest | TodoAddSuccess | TodoAddFailure;

export const todoAddRequest = (todo: Todo): TodoAddRequest => ({
    type: TODO_ADD_REQUEST,
    todo,
});

export const todoAddSuccess = (todo: Todo): TodoAddSuccess => ({
    type: TODO_ADD_SUCCESS,
    todo,
});

export const todoAddFailure = (error: AxiosError): TodoAddFailure => ({
    type: TODO_ADD_FAILURE,
    error,
});
