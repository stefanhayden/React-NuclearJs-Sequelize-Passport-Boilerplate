import reactor from '../../reactor';
import getters from './getters';
import $ from  'jquery';
import util from 'app/lib/util';
import {
	LOGIN,
	LOGOUT,
	LOGIN_ERROR,
} from './actionTypes';

const actions = {
  signup(email, username, password) {
		return util.promisifyDeffered($.ajax({
			url: '/api/v1/signup',
			type: 'POST',
			data: {
					email,
					username,
					password,
				}
		})).then(data => {
			reactor.dispatch(LOGIN, data);
		}).catch(err => {
			console.log(err)
			reactor.dispatch(LOGIN_ERROR, err);
		});
  },

  logout() {
		return util.promisifyDeffered($.ajax({
			url: '/api/v1/logout',
			type: 'GET',
		})).then(data => {
			reactor.dispatch(LOGOUT);
		});
  },

  login(email, password) {
		return util.promisifyDeffered($.ajax({
			url: '/api/v1/login',
			type: 'POST',
			data: {
					username: email,
					password,
				}
		})).then(data => {
			reactor.dispatch(LOGIN, data);
		}).catch(err => {
			console.log(err)
			reactor.dispatch(LOGIN_ERROR, err);
			throw new Error(err);
		});
  },

  loginCheck() {
		return util.promisifyDeffered($.ajax({
			url: '/api/v1/login',
			type: 'GET',
		})).then(data => {
			reactor.dispatch(LOGIN, data);
		}).catch(err => {
			//console.log(err)
			//reactor.dispatch(LOGIN_ERROR, err);
		});
  },

	clearError() {
			reactor.dispatch(LOGIN_ERROR, null);
	},
};

export default actions;
