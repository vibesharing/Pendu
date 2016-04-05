// ROUTES TODOS
var J1 = require('../models/j1.js');
module.exports 	= function(app) {
	app.get('/j1s', J1.findAll);
	app.post('/j1s', J1.create);
	app.put('/j1s/:id', J1.update);
	app.delete('/j1s/:id', J1.delete);

}
