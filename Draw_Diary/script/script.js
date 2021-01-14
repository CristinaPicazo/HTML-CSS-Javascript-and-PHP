(function(){

    function Stars(numberOfStars, divID){
      var chosenDiv = document.getElementById(divID)  
      chosenDiv.style.display = "none";
      chosenDiv.innerHTML = "";
      function randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
      var text = "";
      var i; 
      for (i = 0; i < numberOfStars; i++) {
          bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
          smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
          tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
          starTwinkleStage = randomFrom("9","13");
          var top = randomFrom(bigRange); 
          var right = randomFrom(bigRange); 
          var width = randomFrom(smallRange);
          text += "<style></style>";
          text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
          text += "animation: twinkling " + starTwinkleStage + "s infinite";
          text += ";box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
          chosenDiv.innerHTML = text;
          chosenDiv.style.display = "block";
      }
  }
  
  
  // Function(How many stars, id that you want populating)
  Stars(100, "demo");
  
  })();

  


/*$(document).ready(function(){
    
      window_Height = window.innerHeight;
      window_Width = window.innerWidth;
      
      image_Element = document.getElementById("star");
      image_Height = image_Element.clientHeight;
      image_Width = image_Element.clientWidth;
      
      availSpace_V = window_Height - image_Height;
      availSpace_H = window_Width - image_Width;
      
      var changeInterval = 3000; // Time has to be in miliseconds. So, 3000 is 3 seconds
      setInterval(moveImage, changeInterval);
      
      blink();
    });
  
  function moveImage(){
      var randNum_V = Math.round(Math.random() * availSpace_V);
      var randNum_H = Math.round(Math.random() * availSpace_H);
      
      image_Element.style.top = randNum_V;
      image_Element.style.left = randNum_H;
  };

  
  function blink() {
    $('.blink_me').fadeOut(800).fadeIn(500, blink);
    
};*/