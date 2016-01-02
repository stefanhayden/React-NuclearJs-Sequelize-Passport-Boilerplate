import passport from 'passport';
import { User } from '../../../models';

module.exports = function(app, serverDir){

	var auth = require(serverDir + '/auth');

	app.post('/api/v1/signup',
		function(req, res) {

			User.find({
				where: {
					username: req.username,
					$or: [
						{ email: req.email }
					]
				}
			})
			.then(function (user){
				if(!user) {
					User.create({
						username: req.body.username, 
						email: req.body.email, 
						password: req.body.password,
					}).then(function(user){
						res.json({
							username: user.username,
							email: user.email,
						});
					}).catch(function(err){
						console.log(err);
						res.json({
							error: err,
						});
					});
				} else {
					res.json({
						error: 'That user exists',
					});
				}
			})
			.catch(err => {
				res.status(401).jason({
					error: err,
				});	
			})
		}
	);
}
