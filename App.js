import React from 'react';
import { Provider } from 'react-redux';

import Store from './src/reducers';

import Home from './src/pages/Home';

const App = () => {
    return (
        <Provider store={Store}>
            <Home />
        </Provider>
    );
};

export default App;
