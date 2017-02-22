import { createStore } from 'redux';
import reducers from '../reducers';

let enhancer = process.env.NODE_ENV !== 'production' ? require('./enhancer.dev.js') : require('./enhancer.js');

export default function configStore(initState = {}) {
    return enhancer(createStore)(reducers, initState);
}
