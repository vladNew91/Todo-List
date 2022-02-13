import { AxiosResponse, AxiosError } from 'axios';
import { CallEffect, put, PutEffect } from 'redux-saga/effects';
import { Todo } from '../../types';
import {
    TodoEditFailure,
    todoEditFailure,
    TodoEditRequest,
    TodoEditSuccess,
    todoEditSuccess,
} from '../actions';

export default function* EditRequestSaga(
    action: TodoEditRequest
): Generator<CallEffect<AxiosResponse<Todo>> | PutEffect<TodoEditSuccess | TodoEditFailure>> {
    try {
        const { todo } = action;

        yield put(todoEditSuccess(todo));
    } catch (error) {
        yield put(todoEditFailure(error as AxiosError));
    }
}
