( function ( $ ){

		$("nav select").change(function() {
			  window.location = $(this).find("option:selected").val();
		});
		
		
	
}(jQuery));








