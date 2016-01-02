
import React from 'react';
import reactor from 'app/reactor';
import ClickTracker from 'app/modules/ClickTracker';
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar';
//import FlatButton from 'material-ui/lib/flat-button';
import FlatButton from './FlatButton';

const Header = React.createClass({
  displayName: 'Header',

  render() {
	const { loggedin } = this.props;
	return (
		<AppBar 
		showMenuIconButton={false}
		title={<Link to='/'>SOME TITLE</Link>} 
		>
			<span>
			<FlatButton
				to='/about'
				label='About'/>

			{loggedin ? 	
				<FlatButton
					to='/logout'
					label='Logout'/>
			:
				<span>
				<FlatButton
					to='/login'
					label='Login'/>
				<FlatButton
					to='/signup'
					label='Signup'/>
				</span>
			}

			{loggedin ? `Hello!` : null}
			</span>
		</AppBar>
		);
  },
});

export default Header;
