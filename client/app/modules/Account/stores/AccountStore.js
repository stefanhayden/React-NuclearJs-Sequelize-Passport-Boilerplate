import { Store, toImmutable } from 'nuclear-js';
import reactor from 'app/reactor';
import getters from '../getters';
import {
	LOGIN,
	LOGOUT,
	LOGIN_ERROR,
} from '../actionTypes';


function logout(state) {
	return state.set('info', toImmutable({}));
}

function login(state, message) {
	return state.set('info', toImmutable(message));
}

function loginError(state, message) {
	return state.set('loginError', message);
}

export default Store({
  getInitialState() {
    return toImmutable({
			info: toImmutable({}),
		});
  },

  initialize() {
    this.on(LOGIN_ERROR, loginError);
    this.on(LOGIN, login);
    this.on(LOGOUT, logout);
  }
});
