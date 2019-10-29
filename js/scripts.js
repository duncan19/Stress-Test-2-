$(document).ready(function(){
  var numberArray = []
  var numberArray2 = []
  $("#formStress").submit(function(event) {
  event.preventDefault();

  $("#stress-level").show();
  $("#stress-strategy").show();
  $("form").hide();

$("input:checkbox[name=question1]:checked").each(function (){
  var answer1 = parseInt($(this).val());

  (numberArray).push(answer1);
console.log(numberArray);
});


$("input:checkbox[name=question2]:checked").each(function (){
  var answer2 = parseInt($(this).val());
  (numberArray).push(answer2);
    console.log(numberArray);


});

$("input:checkbox[name=question3]:checked").each(function (){
  var answer3 = parseInt($(this).val());
  (numberArray2).push(answer3);
    console.log(numberArray2);


});

var score = numberArray.length - numberArray2.length;

if (score >= 7) {
  $("#high-stress").show();
} else if (score >=4) {
  $("#medium-stress").show();
} else if (score >=0) {
  $("#low-stress").show();
} else {
  $("#no-stress").show();
}





});

});
