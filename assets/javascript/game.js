$(document).ready(function(){
  
  var targetNumber = Math.floor((Math.random() * 121) + 19);
  $("#target").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;
  var gameOver = false;
  
  $("#fluidCount").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);
  
  $("#flip").click(function(){
    $("#instructions").slideToggle(2000);
  });
  
 function assignRandomNumbers(){
    var randomNumber = Math.floor((Math.random() * 13) + 1);
	$("#ruby").attr("bird-value", randomNumber);
	randomNumber = Math.floor((Math.random() * 13) + 1);
	$("#sapphire").attr("bird-value", randomNumber);
	randomNumber = Math.floor((Math.random() * 13) + 1);
	$("#emerald").attr("bird-value", randomNumber);
	randomNumber = Math.floor((Math.random() * 13) + 1);
	$("#topaz").attr("bird-value", randomNumber);
  }
  
  assignRandomNumbers();

 $(".bird").on("click", function(){
	if (gameOver === false){
	
	  var birdValue = ($(this).attr("bird-value"));
	  birdValue = parseInt(birdValue);
	  counter += birdValue;
	  $("#fluidCount").text(counter);
	  var percentage = (counter / targetNumber) * 100;
	  $(".progress-bar").css('width',percentage+"%").attr('aria-valuenow',birdValue);
	  $(".progress-bar").text(parseInt(percentage)+"%");

	    if (counter === targetNumber){
	    $("#winMessage").show();
	    wins++;
	    $("#wins").text(wins);
	    gameOver = true;
	    $(".progress-bar").removeClass("progress-bar-info");
	    $(".progress-bar").addClass("progress-bar-success");
        }
	  
	    else if (counter >= targetNumber){
		$("#lostMessage").show();
	    losses++;
	    $("#losses").text(losses);
		gameOver = true;
		$(".progress-bar").removeClass("progress-bar-info");
		$(".progress-bar").addClass("progress-bar-danger");
        } 
	}
  });
	
	$(".replay").on("click", function() {
	  counter = 0;
	  $("#fluidCount").text(counter);
	  targetNumber = Math.floor((Math.random() * 121) + 19);
	  $("#target").text(targetNumber);
	  assignRandomNumbers();
	  gameOver = false;
	  $("#winMessage").hide();
	  $("#lostMessage").hide();
	  $(".progress-bar").css('width',0+"%").attr('aria-valuenow',0);
	  $(".progress-bar").text(0+"%");
	  $(".progress-bar").removeClass("progress-bar-danger progress-bar-success");
	  $(".progress-bar").addClass("progress-bar-info");

	});
});