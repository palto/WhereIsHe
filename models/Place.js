var mongoose = require('mongoose')
	, Schema = mongoose.Schema

var PlaceSchema = new Schema({
	name: String
});

PlaceSchema.statics.findAll = function(callback){
	return this.find({}, callback);
}

exports.Place = mongoose.model('Place', PlaceSchema);
