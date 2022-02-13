import styles from '../../styles/index.module.css';

export const DescriptionComponent: React.FC = (): JSX.Element => (
    <div className={styles.description}>
        <h3>Todo list application in Single Page Application format.</h3>
        <span>Application Requirements:</span>
        <ol>
            <li>The application contains 2 pages: the main page and the todo list.</li>
            <li>The transition between pages implemented through the navbar.</li>
            <li>The main page have a logo and a short description of the page.</li>
            <li>The page for the todo list have an interactive list.</li>
            <li>List data is requested from https://jsonplaceholder.typicode.com/todos.</li>
            <li>The ability to add/change/delete todo is implemented.</li>
            <li>Pagination is implemented without reloading the page.</li>
        </ol>

        <div>
            <span>List of technologies:</span>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Redux-Saga</li>
                <li>React router</li>
                <li>Typescript</li>
                <li>Axios</li>
            </ul>
        </div>
    </div>
);
