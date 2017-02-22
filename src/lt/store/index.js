import { createStore } from 'redux';
import reducers from '../reducers';

let enhancer = process.env.NODE_ENV !== 'production' ? require('./enhancer.dev.js') : require('./enhancer.js');

const initState = {};

const store = createStore(reducers, initState, enhancer);

export default store;
