$(document).ready(function() {
	var template = $('#placesTemplate').html();
	alert(template);
	$('#countplaces').click(function(e){
		e.preventDefault();
		alert('Hello world');
		$.get('/places', {}, function(data){
			alert(data);
			var places = $.parseJSON(data);
			var html = Mustache.render(template, {places: places});
			$('#placesAjax').html(html);
		});
	});
});
