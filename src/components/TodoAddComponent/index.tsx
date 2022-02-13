import React from 'react';
import styles from '../../styles/index.module.css';
import { Todo } from '../../types/todo';

interface TodoAddComponentProps {
    user: number;
    onSubmitAdd: (todo: Todo) => void;
}

export const TodoAddComponent: React.FC<TodoAddComponentProps> = ({
    user,
    onSubmitAdd,
}: TodoAddComponentProps): JSX.Element => {
    const [title, setTitle] = React.useState<string>('');

    const createTodo = () => {
        if (title.length) {
            onSubmitAdd({
                id: Date.now(),
                userId: user,
                title: title,
                completed: false,
            });
            setTitle('');
        }
    };

    return (
        <div>
            <span>Create todo:&nbsp;</span>

            <input
                type="text"
                placeholder="Todo name"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />

            <button className={styles.btnCreate} onClick={createTodo}>
                Create
            </button>
        </div>
    );
};
