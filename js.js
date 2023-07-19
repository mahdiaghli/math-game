//document.cookie = "0";

//window.console.log(document.cookie);

document.getElementById("highScore").innerHTML = document.cookie;

if(document.cookie <= 0) {
    document.getElementById("highScore").innerHTML = 0;
}

//window.console.log(document.cookie);

var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
var cookies;

document.getElementById("startReset").onclick = function(){
    if(playing == true) {
//        document.cookie = "0";

//                window.console.log("if" + playing);
        location.reload();
    }else{
        score = 0;
//       document.cookie = "0";

        
       playing = true; document.getElementById("scorevalue").innerHTML =score; 
       
        show("timeRemaining");
        
         document.getElementById("startReset").innerHTML = "Reset game";
        
        timeRemaining = 60;
        document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
        
        hide("gameOver");
        
        startCountdown();
        
        questionMaker();
//        window.console.log("else" + playing);
    }
}

function questionMaker() {
    
    var a = Math.floor(Math.random()*10) + 1;
    var b = Math.floor(Math.random()*10) + 1;
    correctAnswer = a*b;
    var currentPosition = Math.floor(Math.random()*4) + 1;

    document.getElementById("question").innerHTML = a + "x" + b ; 
    document.getElementById("box" + currentPosition).innerHTML = correctAnswer;
 
    var answers = [correctAnswer];
    
    for(i=1 ; i<5 ; i++) {
        if(i != currentPosition) {
            var wrongAnswer; 
            do {
            wrongAnswer = (Math.floor(Math.random()*10) + 1)*(Math.floor(Math.random()*10) + 1);
            }
            while (answers.indexOf(wrongAnswer) > -1)
             document.getElementById("box" + i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
    
for (i=1 ; i<5 ; i++) {
     document.getElementById("box" + i).onclick = function() {
      if(correctAnswer ==                       this.innerHTML) {
            score++;
            questionMaker();
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },500);

      }else {
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },500);   
      }  
    }
}

}

        
 function startCountdown() {
    action = setInterval(function() {timeRemaining--; document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
     
     if(timeRemaining == 0){
         stopCountdown();
         cookies = score;
         
//         window.console.log("cookies " + cookies);
//         window.console.log("score " + score);
         if(document.getElementById("highScore").innerHTML < cookies) {
             
         document.cookie = cookies;
             
//document.getElementById("highScore").innerHTML = document.cookie;
             
             
         document.getElementById("highScore").innerHTML = cookies;
//             window.alert(document.cookie);
             
//             window.console.log(document.cookie);
         }
         show("gameOver");
//         let text = cookies.toString();

//         document.cookie += text;

//         window.console.log(document.cookie);
         
//         window.console.log(text);
         document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>your score is " + score + ".</p>";
         
         hide("timeRemaining");
         hide("correct");
         hide("wrong");
         playing = false;
         document.getElementById("startReset").innerHTML = "start game";
         
     }
    },1000); 
 }

function stopCountdown(){
    clearInterval(action);
}

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

//document.cookie = cookie;