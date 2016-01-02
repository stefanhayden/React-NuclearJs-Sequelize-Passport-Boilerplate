
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Account from '../modules/Account'

const Signup = React.createClass({
  displayName: 'Signup',

  render() {
    return (
      <div>
				Login!
				<form onSubmit={this.handleSubmit}>
				<div>
				<TextField
					ref="email"
  				hintText="Email"
  				floatingLabelText="Email" />
				</div>
				<div>
				<TextField
					ref="username"
  				hintText="Username"
  				floatingLabelText="Username" />
				</div>
				<div>
				<TextField
					ref="password"
 					hintText="Password"
  				floatingLabelText="Password"
  				type="password" />
				</div>
				<div>
				<TextField
					ref="passwordConfirm"
 					hintText="Password Confirm Field"
  				floatingLabelText="Confirm Password"
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
		const username = this.refs.username.getValue();
		const password = this.refs.password.getValue();
		const passwordConfirm = this.refs.passwordConfirm.getValue();
		if (password === passwordConfirm) {
			Account.actions.signup(email, username, password).then(() => {
				this.props.history.pushState(null,'/')
			});
		}
	}

});

export default Signup;
