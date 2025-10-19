import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';

// создаём корень React 18
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker
serviceWorker.unregister(); // можно поменять на register() для PWA
