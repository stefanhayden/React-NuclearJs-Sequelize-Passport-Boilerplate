module.exports = function(app){

    app.get('/api/v1/clicks', function(req, res){
        res.json({
					clicks: 1,
				});
    });

}
