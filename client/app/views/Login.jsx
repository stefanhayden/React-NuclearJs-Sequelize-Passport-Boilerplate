import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Account from '../modules/Account'
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import mixins from 'app/mixins';

const Login = React.createClass({
  displayName: 'Login',

	mixins: mixins,

	getDataBindings() {
		return {
			error: Account.getters.loginError
		}
	},

  render() {
    return (
      <div>
				Login!
				<Dialog
					title="Error"
					open={!!this.state.error}
					onRequestClose={this.clearError} 
					actions={[
						<FlatButton
							key={1}
							label="Try Again"
							primary={true}
							keyboardFocused={true}
							onClick={this.clearError} />
					]}
					>
					There was problem while trying to login.
				</Dialog>

				<form onSubmit={this.handleSubmit}>
				<div>
				<TextField
					ref="email"
  				hintText="Email"
  				floatingLabelText="Email" />
				</div>
				<div>
				<TextField
					ref="password"
 					hintText="Password Field"
  				floatingLabelText="Password"
  				type="password" />
				</div>
				<RaisedButton label="Login" primary={true} type="submit" />
				</form>
      </div>
    );
  },

	handleSubmit(e) {
		e.preventDefault()
		const email = this.refs.email.getValue();
		const password = this.refs.password.getValue();
		Account.actions.login(email, password).then(() => {
			this.props.history.pushState(null,'/')
		});
	},

	clearError() {
		Account.actions.clearError();
	},
});

export default Login;
