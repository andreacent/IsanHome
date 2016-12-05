$(document).ready(function() {  

  //toggle menu
$('#recientes').click(function() {
	$(".sala").show();
	$(".cocina").show();
});

$('#sala').click(function() {
	$(".sala").show();
   	$(".cocina").hide();
});

$('#cocina').click(function() {
	$(".cocina").show();
   	$(".sala").hide();
});

$('#cuarto').click(function() {
   	$(".sala").hide();
   	$(".cocina").hide();
});
  
});