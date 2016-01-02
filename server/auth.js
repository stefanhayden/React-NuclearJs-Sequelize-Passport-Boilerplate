

export function isLoggedin(options) {
	return (req, res, next) => {
		if(req.user) {
			next();
		} else {
			res.status(401).json({ error: 'You must be logged in' })
		}
	}	
}
