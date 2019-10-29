$(document).ready(function(){
  $("#formStress").submit(function(event) {
  event.preventDefault();

  $("#stress-level").show();
  $("#stress-strategy").show();
  $("form").hide();

$("input:checkbox[name=question1]:checked").each(function (){
  var answer1 = $(this).val();
  $('#stress-level').append(answer1 + "<br>");


});


$("input:checkbox[name=question2]:checked").each(function (){
  var answer2 = $(this).val();
  $('#stress-level').append(answer2 + "<br>");


});

$("input:checkbox[name=question3]:checked").each(function (){
  var answer3 = $(this).val();
  $('#stress-strategy').append(answer3 + "<br>");


});




});

});
