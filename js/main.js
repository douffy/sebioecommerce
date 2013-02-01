( function ( $ ){

		$("nav select").change(function() {
			  window.location = $(this).find("option:selected").val();
		});
		 
		 $(".addbasket").click(function (e) {
	         	e.preventDefault();
		         $(this).text('Ajouté !');
		         $('#panier img').attr("src", 'img/panierfull.png');
		         
		 });
		 
		 $("table td img").click(function (e) {
	         	e.preventDefault();
		        $(this).closest('tr').fadeOut();
		         
		 });
		
	
}(jQuery));








