import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './js/components/Home';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
		</Route>
	</Router>,
	document.getElementById('app')
);
