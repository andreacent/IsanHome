$(document).ready(function() {
  //MENU
  var menu = $('header');
  var menu_offset = menu.offset();
  /* 
    Cada vez que se haga scroll en la página
    haremos un chequeo del estado del menú
    y alternamos el tam del logo
  */ 
  
  //MENU PARA TELEFONOS 
  $('header #icon-close-menu').click(function(){
    $('header nav#main-menu').animate({
      left:'-100%'
    });
    $('body').unbind('touchmove');
  });

  $('#icon-navicon').click(function(){
		$('header nav#main-menu').animate({
			left:'0'
		});
		contador=0;
    $('body').bind('touchmove', function(e){e.preventDefault()}); 
	});
});
