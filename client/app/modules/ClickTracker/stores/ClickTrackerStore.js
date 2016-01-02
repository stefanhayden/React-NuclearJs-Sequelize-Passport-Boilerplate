import { Store, toImmutable } from 'nuclear-js';
import reactor from '../../../reactor';
import getters from '../getters';
import {
	TRACK_CLICK,
	INIT_CLICKS,
} from '../actionTypes';

function trackClick(state, message) {
  return state.update('clicks', v => {
		return v + 1
	});
}

function init(state, message) {
	return state.set('clicks', message.clicks);
}

export default Store({
  getInitialState() {
    return toImmutable({
			clicks: 0,
		});
  },

  initialize() {
    this.on(TRACK_CLICK, trackClick);
    this.on(INIT_CLICKS, init);
  }
});
