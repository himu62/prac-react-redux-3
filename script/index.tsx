import * as React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import * as logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';
import {getAllProducts} from './actions';
import App from './containers/App';

const middleware = [thunk, logger()];
const store = createStore(
	reducer,
	compose(
		applyMiddleware(...middleware),
    	window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

store.dispatch(getAllProducts());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
