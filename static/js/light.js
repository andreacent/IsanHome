$(document).ready(function() {  

  //toggle light
  $('.lightd').click(function() {
    $(this).toggleClass('lightd');
    $(this).toggleClass('lighta');
  });
  $('.lighta').click(function() {
    $(this).toggleClass('lightd');
    $(this).toggleClass('lighta');
  });
  
});