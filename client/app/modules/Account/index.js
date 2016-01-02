import reactor from '../../reactor';
import actions from './actions';
import getters from './getters';
import AccountStore from './stores/AccountStore';

reactor.registerStores({
  Account: AccountStore,
});

export default {
  getters,
  actions,
};
