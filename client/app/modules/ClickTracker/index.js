import reactor from '../../reactor';
import actions from './actions';
import getters from './getters';
import ClickTrackerStore from './stores/ClickTrackerStore';
import mainComponent from './components/ClickTracker';

reactor.registerStores({
  ClickTracker: ClickTrackerStore,
});

export default mainComponent;
export {
  getters,
  actions,
};
