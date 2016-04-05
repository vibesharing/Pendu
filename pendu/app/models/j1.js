// MODEL TODO
var mongoose = require('mongoose');
var j1Schema = new mongoose.Schema({
  word: Array
});
var J1 = {

    model: mongoose.model('J1', j1Schema),

    create: function(req, res) {
		J1.model.create({
			word: req.body.word
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		J1.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		J1.model.findByIdAndUpdate(req.params.id, {
			word: req.body.word
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		J1.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = J1;
