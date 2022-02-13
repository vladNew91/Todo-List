import { AxiosResponse, AxiosError } from 'axios';
import { CallEffect, put, PutEffect } from 'redux-saga/effects';
import { Todo } from '../../types';
import {
    todoAddFailure,
    TodoAddFailure,
    TodoAddRequest,
    TodoAddSuccess,
    todoAddSuccess,
} from '../actions/add';

export default function* AddRequestSaga(
    action: TodoAddRequest
): Generator<CallEffect<AxiosResponse<Todo>> | PutEffect<TodoAddSuccess | TodoAddFailure>> {
    try {
        const { todo } = action;

        yield put(todoAddSuccess(todo));
    } catch (error) {
        yield put(todoAddFailure(error as AxiosError));
    }
}
