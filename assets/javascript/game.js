$(document).ready(function(){
  
  var targetNumber = Math.floor((Math.random() * 121) + 19);
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var gameOver = false;
  var num=[];
  $("#target").text(targetNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#fluidCount").text(counter);
  
  $("#flip").click(function(){
    $("#instructions").slideToggle(2000);
  });

  function assignRandomNumbers(){
  	for (i=0; i<4; i++){
  	  num[i]=Math.floor((Math.random() * 13) + 1);
  	  if (num[1]==num[0]){
  	  	while (num[1]==num[0]){
  	  	  num[1]=Math.floor((Math.random() * 13) + 1);
  	  	}
  	  }
  	  if(num[2]==num[1] || num[2]==num[0]){
  	  	while (num[2]==num[1] || num[2]==num[0]){
  	  	  num[2]=Math.floor((Math.random() * 13) + 1);
  	  	}
  	  }
  	  if (num[3]==num[2] || num[3]==num[1] || num[3]==num[0]){
  	  	while (num[3]==num[2] || num[3]==num[1] || num[3]==num[0]){
  	  	  num[3]=Math.floor((Math.random() * 13) + 1);
  	  	}
  	  }
  	}
	$("#ruby").attr("bird-value", num[0]);
	$("#sapphire").attr("bird-value", num[1]);
	$("#emerald").attr("bird-value", num[2]);
	$("#topaz").attr("bird-value", num[3]);
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
	  num=[];
	  assignRandomNumbers();
	  $("#winMessage").hide();
	  $("#lostMessage").hide();
	  $(".progress-bar").css('width',0+"%").attr('aria-valuenow',0);
	  $(".progress-bar").text(0+"%");
	  $(".progress-bar").removeClass("progress-bar-danger progress-bar-success");
	  $(".progress-bar").addClass("progress-bar-info");
	  gameOver = false;
	});
});