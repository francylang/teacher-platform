/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Routes from './components/routes.js';
import { BrowserRouter } from 'react-router-dom';

const router = (
        <BrowserRouter>
            <div>
              <Routes />
            </div>
        </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
