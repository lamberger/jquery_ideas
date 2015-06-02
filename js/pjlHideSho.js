//Show message and fade out
var hiddenBox = $( "#banner-message" );
var hideBtn = $( "#button-container" )
$( "#button-container a" ).on( "click", function( event ) {
  hiddenBox.show("slow");
  hideBtn.hide();
  hiddenBox.fadeOut(7000);
  hideBtn.delay(7000).fadeIn();
});
