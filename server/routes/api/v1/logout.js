import passport from 'passport';

module.exports = function(app, serverDir){

	app.get('/api/v1/logout',
		function(req, res) {
			req.logOut();
			req.session.destroy()
			res.json({
				success: true,
			});
		}
	);
}
