// ROUTES TODOS
var J2 = require('../models/j2.js');
module.exports 	= function(app) {
	app.get('/j2s', J2.findAll);
	app.post('/j2s', J2.create);
	app.put('/j2s/:id', J2.update);
	app.delete('/j2s/:id', J2.delete);

}
