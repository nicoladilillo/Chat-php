(function( $ ){

	$('form').submit(function(event) {
		$.ajax({
			dataType: "josn",
			type: "POST",
			url: "socket_client.php",
			data: $( this ).serialize(),
			success: function(data) {
				$( "main" ).html( data );
			}
		})
	});
	
})( jQuey );