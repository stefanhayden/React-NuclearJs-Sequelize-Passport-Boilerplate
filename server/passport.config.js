import passport from 'passport';
import { User } from './models';

const LocalStrategy = require('passport-local').Strategy;


module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

	passport.serializeUser(function(user, done) {
  	done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		User.find({
			where: {
				id: user.id
			}
		}).then(function(user){
			done(null, user);
		}).catch(function(err){
			done(err, null)
		});
	});

	passport.use(new LocalStrategy(
		function(username, password, done){
			User.find({
				where: {
					$or: [
						{ username: username },
						{ email: username }
					]
				}
			})
			.then(function(user){
				let passwd = user ? user.password : ''
				let isMatch = User.validPassword(password, passwd, done, user)
			})
			.catch(err => {
				done(err)
			})
		}
	));

}
