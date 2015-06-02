$('.view-nav a').click(function() {

    jQuery(this).text('View navigation code');

		if($('#nav').is(':visible')) {
    	jQuery(this).text('View navigation code');
    }
		else {
      jQuery(this).text('Hide navigation code');
    }
		$('#nav').toggle("slow");

    return false;
});

$('#nav li').hover(function() {
  $(this).animate({paddingLeft: '+=10px'}, 250);
  },
    function() {
      $(this).animate({paddingLeft: '-=10px'}, 250);
 });
