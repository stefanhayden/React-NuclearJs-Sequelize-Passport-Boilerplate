import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import reactor from './reactor';

import App from './App';
import Index from './views/Index';
import Login from './views/Login';
import Signup from './views/Signup';
import About from './views/About';
import Account from 'app/modules/Account';
import history from 'app/lib/history'

function requireAuth(nextState, replaceState, callback) {
  if (!reactor.evaluate(Account.getters.loggedin)) {
		Account.actions.loginCheck().then(() => {
			callback();
		}).catch(() => {
			replaceState({ nextPathname: nextState.location.pathname }, '/login');
			callback();
		});
	} else {
		callback();
	}
}

function loggedoutOnly(nextState, replaceState, callback) {
  if (reactor.evaluate(Account.getters.loggedin)) {
		Account.actions.loginCheck().then(() => {
			replaceState({ nextPathname: nextState.location.pathname }, '/');
			callback();
		}).catch(() => {
			callback();
		});
	} else {
		callback();
	}
}

function logout(nextState, replaceState, callback) {
	Account.actions.logout();
	replaceState({}, '/');
	callback();
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
			<IndexRoute component={Index}/>
      <Route path="about" component={About} onEnter={requireAuth}  />
      <Route path="login" component={Login} onEnter={loggedoutOnly} />
      <Route path="logout" onEnter={logout} />
      <Route path="signup" component={Signup} onEnter={loggedoutOnly} />
    </Route>
  </Router>
), document.getElementById('app-container'))
