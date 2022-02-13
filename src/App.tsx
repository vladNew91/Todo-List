import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LayoutComponent, NavBarComponent } from './components';
import { HomePage, TodosListPage } from './pages';
import { store } from './modules';

export const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <LayoutComponent>
                <Router>
                    <NavBarComponent />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/todos" component={TodosListPage} />
                </Router>
            </LayoutComponent>
        </Provider>
    );
};
