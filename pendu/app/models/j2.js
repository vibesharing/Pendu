// MODEL TODO
var mongoose = require('mongoose');
var j2Schema = new mongoose.Schema({
  description: String
});
var J2 = {

    model: mongoose.model('J2', j2Schema),

    create: function(req, res) {
		J2.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		J2.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		J2.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		J2.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = J2;
