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
  var contador = 1;
  $('header #icon-close-menu').click(function(){
    if(contador==0){
      contador=1;
      $('header nav#main-menu').animate({
        left:'-100%'
      });
      $('body').unbind('touchmove');
    }
  });

  $('#icon-navicon').click(function(){
		if(contador==1){
			$('header nav#main-menu').animate({
				left:'0'
			});
			contador=0;
      $('body').bind('touchmove', function(e){e.preventDefault()}); 
		}else{
			contador=1;
			$('header nav#main-menu').animate({
				left:'-100%'
			});
      $('body').unbind('touchmove');
		}
	});
});
