function ensureLoggedIn(req, res, next) {
	if (req.user) {
		next();
	} else {
		res.redirect('/login');
	}
}

function ensureLoggedOut(req, res, next) {
	if (!req.user) {
		next();
	} else {
		res.redirect('/');
	}
}

module.exports = {
	ensureLoggedIn: ensureLoggedIn,
	ensureLoggedOut: ensureLoggedOut,
};