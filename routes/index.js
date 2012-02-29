
/*
 * GET home page.
 */
var places = ["Kotona", "Töissä", "Poissa"]
var currentPlace = "Töissä"
exports.index = function(req, res){
	res.render('index', { title: 'Express', places: places, currentPlace: currentPlace })
};
exports.addPlace = function(req, res){
	places.push(req.param('name'))
	res.redirect('/');
}
exports.listPlaces = function(req, res){
	res.send(JSON.stringify(places));
}
