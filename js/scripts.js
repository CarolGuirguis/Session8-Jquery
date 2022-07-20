
$(document).ready(function(){
    $('[data-type="text"]').hide();
    $('[data-type="text"]').first().show();
  $("button").click(function(){
    $('[data-type="text"]').hide();
    var attr=($(this).attr( 'data-value' ));
    $('[data-value='+attr+']').show();
  })
 
});
