import React, { useCallback } from 'react';
import { Todo } from '../../types/todo';
import styles from '../../styles/index.module.css';

interface TodoComponentProps {
    todo: Todo;
    index: number;
    onSubmitEdit: (todo: Todo) => void;
    onSubmitDelete: (todo: Todo) => void;
}

export const TodoComponent: React.FC<TodoComponentProps> = ({
    todo,
    index,
    onSubmitEdit,
    onSubmitDelete,
}: TodoComponentProps): JSX.Element => {
    const [title, setTitle] = React.useState<string>(todo.title);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const onEditHandle = useCallback(
        (todo: Todo) => {
            if (isEdit) onSubmitEdit({ ...todo, title: title });
            setIsEdit(!isEdit);
        },
        [isEdit, title, onSubmitEdit]
    );

    const onEdit = useCallback(() => onEditHandle(todo), [onEditHandle, todo]);
    const onDelete = useCallback(() => onSubmitDelete(todo), [onSubmitDelete, todo]);
    const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);

    return (
        <div className={styles.listItem}>
            <div>
                {`${index}. `}
                {isEdit ? <input type="text" value={title} onChange={onChangeTitle} /> : todo.title}
            </div>

            <div style={{ display: 'flex' }}>
                <button className={styles.btnEdit} onClick={onEdit}>
                    Edit
                </button>

                <button className={styles.btnDel} onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};
