$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.input-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

$('#submitNewMovie').on('submit', function(e){
  $('#submitMovieModal').modal('show');
  e.preventDefault();
});