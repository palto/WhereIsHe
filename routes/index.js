
/*
 * GET home page.
 */
var Place = require('../models/Place').Place;
var currentPlace = "Töissä"
exports.index = function(req, res){
	Place.findAll(function(err, places){
		res.render('index', {title: 'Express', places: places, currentPlace: currentPlace});
	});
};

exports.addPlace = function(req, res){

	var place = new Place();
	place.name = req.param('name');
	place.save(function(err){
		console.log(err);
		res.redirect('/');	
	});
}
exports.listPlaces = function(req, res){
	Place.findAll(function(error, places){
		res.send(JSON.stringify(places));
	});
}

exports.currentPlace = function(req, res){
	res.send(JSON.stringify(currentPlace));
}
