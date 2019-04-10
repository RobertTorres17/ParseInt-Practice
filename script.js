var userInputVar;
$(".userInputBut").click(function(){
  userInputVar=$(".userInput").val();
    $(".result").html("''"+userInputVar+"''");
});
$(".userInputParse").click(function(){
   userInputVar=$(".userInput").val();
    $(".result").html(userInputVar);
     $(".result").html(parseInt(userInputVar));
});
$(".userInput10").click(function(){
   $(".result").html(userInputVar);
     $(".result").html("''"+userInputVar+10+"''");    
});
$(".userInputParse10").click(function(){
   $(".result").html(userInputVar);
     $(".result").html(parseInt(userInputVar)+10);  
});