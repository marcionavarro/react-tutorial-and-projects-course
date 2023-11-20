import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // Por esta verficação a chamada da API acontece duas vezes, em produção StrictMode é removido automaticamente
    <App />
  // </React.StrictMode>
);
