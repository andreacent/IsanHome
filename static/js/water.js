$(document).ready(function() {  
  //MENU 
  //close
  $('.dropd').click(function() {
    $(this).toggleClass('dropd');
    $(this).toggleClass('dropa');
  });
  $('.dropa').click(function() {
    $(this).toggleClass('dropd');
    $(this).toggleClass('dropa');
  });
  
});
