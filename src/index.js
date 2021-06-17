import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import 'antd/dist/antd.css';
import './index.css'

import Root from './modules/Root';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
