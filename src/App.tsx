import React, { FC, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import i18n from './i18n';

const history = createBrowserHistory();

const App: FC = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router history={history}>
        <Switch>
          <Route path="/" render={() => <Home />} exact/>
          <Route path="/auth" render={() => <Login />} exact/>
          <Route path="/register" render={() => <Registration />} exact/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </I18nextProvider>
  );
};

export default App;
