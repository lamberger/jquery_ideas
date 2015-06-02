//Toogle message with a link
// $( ".view a" ).click(function() {
// 	$( ".mess" ).toggle( "show" );
// });


$('.view a').click(function() {

    jQuery(this).text('View code');

		if($('.mess').is(':visible')) {
    	jQuery(this).text('View code');
    }
		else {
      jQuery(this).text('Hide code');
    }
		$('.mess').toggle("slow");

    return false;
});
