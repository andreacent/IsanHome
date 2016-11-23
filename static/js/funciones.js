$(document).ready(function() {
  //MENU
  var menu = $('#menu');
  var menu_offset = menu.offset();
  var menu_bar = $('#menu_bar');
  var menu_bar_offset = menu_bar.offset();
  /* 
    Cada vez que se haga scroll en la página
    haremos un chequeo del estado del menú
    y lo vamos a alternar entre 'fixed' y 'static'. 
  */ 
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top && $(window).width() > 800) {
      menu.addClass('menu-fijo');
    } else if($(window).scrollTop() > menu_bar_offset.top && $(window).width() < 800){
      menu_bar.addClass('menu-fijo');
      menu.addClass('nav-top');
    } else {
      menu.removeClass('menu-fijo');
      menu_bar.removeClass('menu-fijo');
      menu.removeClass('nav-top');
    }
  });

  //MENU PARA TELEFONOS 
  var contador = 1;
  $('#menu_bar').click(function(){
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
      $('body').bind('touchmove', function(e){e.preventDefault()}); 
		}else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
      $('body').unbind('touchmove');
		}
	});

});

// CARGA DE IMAGENES
function CargarImagenes(){
    $(".post-carga").each(function(){
        $(this).attr('src', $(this).data('src')).load(function(){
            $(this).fadeIn();
        });
    });
}

$(window).load(function(){
    CargarImagenes();
});