import { combineReducers, createStore } from 'redux';

import todos from './reducers/todos';

const rootReducer = combineReducers({
    todos
});

export default createStore(rootReducer);