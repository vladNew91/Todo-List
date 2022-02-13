import axios, { AxiosResponse, AxiosError } from 'axios';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { Todo } from '../../types';
import {
    todosListFailure,
    TodosListFailure,
    TodosListRequest,
    todosListSuccess,
    TodosListSuccess,
} from '../actions';

export interface Response<T> {
    data: T;
}

function requestTodos() {
    return axios('https://jsonplaceholder.typicode.com/todos');
};

export default function* ListRequestSaga(
    action: TodosListRequest
): Generator<CallEffect<AxiosResponse<Todo[]>> | PutEffect<TodosListSuccess | TodosListFailure>> {
    try {
        const { data } = (yield call(requestTodos)) as Response<Todo[]>;

        yield put(todosListSuccess(data));
    } catch (error) {
        yield put(todosListFailure(error as AxiosError));
    }
}
