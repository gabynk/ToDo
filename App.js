import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';

import Home from './src/pages/Home';

const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
};

export default App;
