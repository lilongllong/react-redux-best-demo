import { composeWithDevTools } from 'redux-devtools-extension';
const enhancer = require('./enhancer');
exports.default = composeWithDevTools(enhancer);
module.exports = exports.default;
