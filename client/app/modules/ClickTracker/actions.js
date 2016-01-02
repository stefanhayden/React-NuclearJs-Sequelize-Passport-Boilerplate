import reactor from '../../reactor';
import getters from './getters';
import $ from  'jquery';
import {
	TRACK_CLICK,
	INIT_CLICKS,
} from './actionTypes';

const actions = {
  trackClick() {
		reactor.dispatch(TRACK_CLICK);
  },
	init() {
		$.ajax({
			url: '/api/v1/clicks'
		}).then(data => {
			reactor.dispatch(INIT_CLICKS, data);
		})
	},
};

export default actions;
