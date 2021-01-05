import { combineReducers, createStore } from 'redux';

import todos from './todos';

const rootReducer = combineReducers({
    todos
});

export default createStore(rootReducer);