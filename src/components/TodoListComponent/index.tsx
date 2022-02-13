import React from 'react';
import { TodoComponent } from '..';
import styles from '../../styles/index.module.css';
import { Todo } from '../../types/todo';

type TodoListComponentProps = {
    todos: Todo[];
    user: number;
    onSubmitDelete: (todo: Todo) => void;
    onSubmitEdit: (todo: Todo) => void;
};

export const TodoListComponent: React.FC<TodoListComponentProps> = ({
    todos,
    user,
    onSubmitDelete,
    onSubmitEdit,
}: TodoListComponentProps): JSX.Element => {
    const userTodos = todos.filter((todo) => todo.userId === user);

    return (
        <div className={styles.list}>
            {!userTodos.length ? (
                <div style={{ textAlign: 'center' }}>No Todos &#9786;</div>
            ) : (
                userTodos.map((todo: Todo, index: number) => (
                    <TodoComponent
                        key={todo.id}
                        todo={todo}
                        onSubmitEdit={onSubmitEdit}
                        index={++index}
                        onSubmitDelete={onSubmitDelete}
                    />
                ))
            )}
        </div>
    );
};
