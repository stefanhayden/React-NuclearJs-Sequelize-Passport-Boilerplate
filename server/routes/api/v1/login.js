import passport from 'passport';

module.exports = function(app, serverDir){

	var auth = require(serverDir + '/auth');

		app.get('/api/v1/login',
			auth.isLoggedin({
				redirect: '/login'
			}),
			function(req, res) {
				res.json({
					name: req.user.name,
					email: req.user.email,
				});
			}
		);

		app.post('/api/v1/login',
  		passport.authenticate('local'),
			function(req, res) {
				res.json({
					name: req.user.name,
					email: req.user.email,
				});
			}
		);
}
