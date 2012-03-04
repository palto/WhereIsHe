
/*
 * GET home page.
 */
var placeProvider = require('../placeprovider').placeProvider;
var currentPlace = "Töissä"
exports.index = function(req, res){
	placeProvider.findAll(function(error, places){
		res.render('index', {title: 'Express', places: places, currentPlace: currentPlace});
	});
};

exports.addPlace = function(req, res){
	placeProvider.save({name: req.param('name')}, function(){
		res.redirect('/');	
	});
}
exports.listPlaces = function(req, res){
	placeProvider.findAll(function(error, places){
		res.send(JSON.stringify(places));
	});
}
