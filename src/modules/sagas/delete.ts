import { AxiosResponse, AxiosError } from 'axios';
import { CallEffect, put, PutEffect } from 'redux-saga/effects';
import { Todo } from '../../types';
import {
    todoDeleteFailure,
    TodoDeleteFailure,
    TodoDeleteRequest,
    TodoDeleteSuccess,
    todoDeleteSuccess,
} from '../actions/delete';

export default function* DeleteRequestSaga(
    action: TodoDeleteRequest
): Generator<CallEffect<AxiosResponse<Todo>> | PutEffect<TodoDeleteSuccess | TodoDeleteFailure>> {
    try {
        const deleteTodo: Todo = action.todo;

        yield put(todoDeleteSuccess(deleteTodo));
    } catch (error) {
        yield put(todoDeleteFailure(error as AxiosError));
    }
}
