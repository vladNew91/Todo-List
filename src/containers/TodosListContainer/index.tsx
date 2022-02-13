import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../../types';
import styles from '../../styles/index.module.css';
import { PaginationComponent, TodoAddComponent, TodoListComponent } from '../../components';
import { selectTodosData, todoAddRequest, todoDeleteRequest, todoEditRequest, todosListRequest } from '../../modules';

export const TodosListContainer: React.FC = (): JSX.Element => {
    const todos = useSelector(selectTodosData);
    const dispatch = useDispatch();

    const [user, setUser] = useState<number>(1);

    useEffect(() => {
        dispatch(todosListRequest());
    }, [dispatch]);

    const handleSubmitAdd = (todo: Todo) => dispatch(todoAddRequest(todo));
    const handleSubmitDelete = (todo: Todo) => dispatch(todoDeleteRequest(todo));
    const handleSubmitEdit = (todo: Todo) => dispatch(todoEditRequest(todo));

    const changeUser = useCallback((id: number) => setUser(id), []);

    if (!todos) return <div style={{ textAlign: 'center' }}>Loading...</div>;

    return (
        <>
            <div className={styles.listNav}>
                <TodoAddComponent user={user} onSubmitAdd={handleSubmitAdd} />
                <PaginationComponent todos={todos} onSubmitUser={changeUser} />
            </div>

            <TodoListComponent
                todos={todos}
                user={user}
                onSubmitEdit={handleSubmitEdit}
                onSubmitDelete={handleSubmitDelete}
            />
        </>
    );
};
