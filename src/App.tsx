import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import i18n from './i18n';

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
);

export default App;
