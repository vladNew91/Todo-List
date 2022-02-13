import React from 'react';
import { useHistory } from 'react-router';
import styles from '../../styles/index.module.css';

export const NavBarComponent: React.FC = (): JSX.Element => {
    const history = useHistory();
    const goToPage = (location: string) => history.push(location);

    return (
        <nav className={styles.navbar}>
            <button className={styles.btnGo} onClick={() => goToPage('/')}>
                Home page
            </button>

            <button className={styles.btnGo} onClick={() => goToPage('/todos')}>
                Todos page
            </button>
        </nav>
    );
};
