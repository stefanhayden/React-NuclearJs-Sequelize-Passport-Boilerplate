require('babel-polyfill');

import React from 'react';
import reactor from 'app/reactor';
import ClickTracker from 'app/modules/ClickTracker';
import Account from 'app/modules/Account';
import Header from 'app/components/Header';
import mixins from 'app/mixins';
require('../sass/app.scss');

const App = React.createClass({
  displayName: 'App',

  mixins: mixins,

  getDataBindings() {
    return {
      loggedin: Account.getters.loggedin,
    };
  },


	componentWillMount() {
		Account.actions.loginCheck().catch(() => {})
	},

  render() {
		const { loggedin } = this.state;
    return (
      <div>
				<Header  loggedin={loggedin} />
				<hr />
				{this.renderChildren()}
      </div>
    );
  },

	renderChildren() {
		const { loggedin  } = this.state;

		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, { loggedin });
		});
	}

});

export default App;
