require(['text!placestemplate.html', 'jquery-1.7.1', 'underscore', 'mustache'], function(placesTemplate){
	function populatePlaces(){
		$.when($.get('/currentPlace'), $.get('/places')).done(function(args1, args2){
			var currentPlace = $.parseJSON(args1[0]);
			var places = $.parseJSON(args2[0]);
			_.each(places, function(place){
				if(place.name == currentPlace){
					place.current = true;
				}
			});
			var html = Mustache.render(placesTemplate, {places: places});
			$('#placesAjax').html(html);
		});
	}

	$('#countplaces').click(function(e){
		e.preventDefault();
		populatePlaces();
	});

	populatePlaces();	
});
