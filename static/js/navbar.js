$(document).ready(function() {  
  //MENU 
  //close
  $('header #icon-close-menu').click(function(){
    $('header nav#main-menu').animate({
      left:'-100%'
    });
    $('body').unbind('touchmove');
  });
  //open
  $('#icon-navicon').click(function(){
		$('header nav#main-menu').animate({
			left:'0'
		});
    $('body').bind('touchmove', function(e){e.preventDefault()}); 
	});
});
