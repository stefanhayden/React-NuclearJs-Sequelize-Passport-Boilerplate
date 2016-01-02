
import express from 'express';
import nunjucks from 'nunjucks';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import models from './models';

const app = express();

global.__app = __dirname + '/';

app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: '/js/' }));
app.use(require('webpack-hot-middleware')(compiler))


app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({ 
	secret: 'keyboard cat',
	resave: false,
 	saveUninitialized: true, 
}));

require('./passport.config')(app);
require('./routes')(app, __dirname);

app.get('*', function(req, res) {
	res.render('index.html');
});

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
	const server = app.listen(app.get('port'), () => {
		console.log('Express server listening on port ' + server.address().port);
	});
});

