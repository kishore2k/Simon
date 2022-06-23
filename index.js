$( window ).on("load", function() {
  var colors = ["red","yellow","blue","green"];
  var gamePattern=[];
  var userPattern=[];
  var level =0;
  var play=true;


  $(document).on("keypress",function(){
    game();
  });


  for(var i=0;i<colors.length;i++)
  {
    $("#"+colors[i]).on("click",function(){
      var userColor=this.id;
      sound(userColor);
      $("#"+userColor).fadeOut(100).fadeIn(100);
      userPattern.push(userColor);
      user();
    });
  }


  function game()
  {
    if(play)
    {
      level++;
      userPattern=[];
      var randomNumber=Math.floor(Math.random()*4);
      var randomColor=colors[randomNumber];
      sound(randomColor);
      gamePattern.push(randomColor);
      $(".heading").text("Level : "+level);
      $("#"+randomColor).fadeOut(100).fadeIn(100);
      play=false;
    }
  }


  function user()
  {
    if(userPattern.length>gamePattern.length){
      setTimeout(function(){wrong();},500);
    }
    if(userPattern[userPattern.length-1]===gamePattern[userPattern.length-1])
    {
      if(userPattern.length===gamePattern.length)
      {
        play=true;
        setTimeout(function(){game();},1000);
      }
    }
    else
    {
      setTimeout(function(){wrong();},500);
    }

  }


  function wrong()
  {
    userPattern=[];
    gamePattern=[];

    var w= new Audio("sounds/wrong.mp3");
    w.play();
    $(".game-content").fadeOut(100).fadeIn(100);
    $(".heading").text("Game Over");


    $("button").prop('disabled',true);
  }


  function sound(colour)
  {
    switch(colour)
    {
      case "red":
      var r = new Audio("sounds/red.mp3");
      r.play();
      break;

      case "blue":
      var b = new Audio("sounds/blue.mp3");
      b.play();
      break;

      case "green":
      var g = new Audio("sounds/green.mp3");
      g.play();
      break;

      case "yellow":
      var y = new Audio("sounds/yellow.mp3");
      y.play();
      break;

      default:
      alert("no sound");
    }
  }


});
