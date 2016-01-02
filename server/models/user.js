import bcrypt from 'bcrypt-nodejs';

export default function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		email: {type: DataTypes.STRING, unique: 'uniqueLogin', allowNull: false, validate: {notEmpty: true, isEmail: true}},
		username: {type: DataTypes.STRING, unique: 'uniqueLogin', allowNull: false, validate: {notEmpty: true}},
		password: {type: DataTypes.STRING, allowNull: false, validate: {notEmpty: true}}
	}, {
		classMethods: {
			validPassword: function(password, passwd, done, user){
				bcrypt.compare(password, passwd, function(err, isMatch){
					if (err) console.log(err)
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
			}
		}
	});

	User.hook('beforeCreate', function(user, fn){
		return new Promise((resolve, reject) => {
			var salt = bcrypt.genSalt(12, function(err, salt){
				return salt
			});
			bcrypt.hash(user.password, salt, null, function(err, hash){
				if(err) reject(err);
				user.password = hash;
				resolve(user)
			});
		});
	});

	return User        
}
