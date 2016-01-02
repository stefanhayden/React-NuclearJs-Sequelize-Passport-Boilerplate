import React from 'react';
import reactor from 'app/reactor';
import FlatButton from 'material-ui/lib/flat-button';
import history from 'app/lib/history'

const Header = React.createClass({
	displayName: 'FlatButton',

	render() {
		return (
			<FlatButton
				{...this.props}
				onClick={this.handleClick}
			/>
		);
	},

	handleClick(e) {
		e.preventDefault();
		history.pushState(null,this.props.to)
	}
});

export default Header;
