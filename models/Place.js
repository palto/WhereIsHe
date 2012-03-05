var mongoose = require('mongoose')
	, Schema = mongoose.Schema

var PlaceSchema = new Schema({
	name: {type: String, required: true}
});

PlaceSchema.statics.findAll = function(callback){
	return this.find({}, callback);
}

PlaceSchema.statics.currentPlace = function(){
	return "Töissä";
}

exports.Place = mongoose.model('Place', PlaceSchema);

