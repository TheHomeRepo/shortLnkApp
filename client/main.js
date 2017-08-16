import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import {routes, onAuthChange} from '../imports/routes/routes';
import '../imports/startup/simple-schema-config.js';

// !! = true. !!null = false
Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	onAuthChange(isAuthenticated);	
});

// Stateless function component
import React from 'react';
const MyComponent = () => {
	return (
		<div>
			<h1>MyComponent is here!</h1>
		</div>
	)
};

Meteor.startup(() => {
	//set default
	Session.set('showVisible', true);

	ReactDOM.render(routes, document.getElementById('app'));
})