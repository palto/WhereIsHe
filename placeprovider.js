var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var PlaceProvider = function(host, port){
	this.db = new Db('whereami', new Server(host, port, {auto_reconnect: true}, {}));
	this.db.open(function(){});
}

PlaceProvider.prototype.getCollection = function(callback){
	this.db.collection('places', function(error, place_collection) {
		if( error ) callback(error);
		else callback(null, place_collection);
	});
};

PlaceProvider.prototype.findAll = function(callback) {
		this.getCollection(function(error, place_collection){
			if( error ) callback(error)
			else {
				place_collection.find().toArray(function(error, results) {
					if( error ) callback(error)
					else callback(null, results);
				});
			}
		});
}

PlaceProvider.prototype.save = function(place, callback){
	this.getCollection(function(error, place_collection) {
		if(error) callback(error)
		else {
			place.created = new Date();
			place_collection.insert(place, function() {
				callback(null, place);
			});
		}
	
	});
}
var placeProvider = new PlaceProvider('127.0.0.1', 27017);
exports.placeProvider = placeProvider
