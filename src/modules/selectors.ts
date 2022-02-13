import { AppState } from './';
import { Todo } from '../types';

export const selectTodosData = (state: AppState): Todo[] | undefined => state.todos.list.data;
