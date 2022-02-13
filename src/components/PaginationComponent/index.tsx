import React, { useMemo } from 'react';
import styles from '../../styles/index.module.css';
import { Todo } from '../../types';

interface PaginationComponentProps {
    todos: Todo[];
    onSubmitUser: (userId: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
    todos,
    onSubmitUser,
}: PaginationComponentProps): JSX.Element => {
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    const pages = useMemo(() => todos[todos.length - 1].userId, []);

    return (
        <div>
            {Array.from({ length: pages }, (_, i: number) => (
                <button className={styles.btnGo} key={i} onClick={() => onSubmitUser(i)}>
                    {++i}
                </button>
            ))}
        </div>
    );
};
