require(['text!placestemplate.html', 'jquery-1.7.1', 'underscore', 'mustache'], function(placesTemplate){
	function populatePlaces(){
		$.get('/places', {}, function(data){
			var places = $.parseJSON(data);
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
