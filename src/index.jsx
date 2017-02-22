import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './lt/store';
import CounterContainer from './lt/containers/CounterContainer';


ReactDOM.render(<Provider store={ store }>
        <CounterContainer></CounterContainer>
    </Provider>,
    document.getElementById('react-root'));
