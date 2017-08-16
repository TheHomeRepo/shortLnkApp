import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// Components
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
	if (Meteor.userId()) {
		browserHistory.replace('/links');
	}
};

const onEnterPrivatePage = () => {
	if (!Meteor.userId()) {
		browserHistory.replace('/');
	}
};

export const onAuthChange = (isAuthenticated) => {
	const pathname = browserHistory.getCurrentLocation().pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes('/');
	const isAuthenticatedPage = authenticatedPages.includes(pathname);

	// if on unauthenticated page and logged in, redirect to /links
	// else if on authenticated page and not logged in, redirect to /
	if (isAuthenticated && isUnauthenticatedPage) {
		browserHistory.replace('/links');
	}else if (!isAuthenticated && isAuthenticatedPage) {
		browserHistory.replace('/');
	}
};


export const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Login} onEnter={onEnterPublicPage}/>
		<Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
		<Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
		<Route path="*" component={NotFound}/>
	</Router>
);