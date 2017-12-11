window.onload = function () {

  var championBoxers  = ["Ali", "Duran", "SRL", "Hangman Ani", "Marvelous", "SRL", "Mike Tyson"];

  var championBoxersPhoto = ["assets/images/ali.gif","assets/images/duran.gif",
  "assets/images/hangman-ani.gif","assets/images/marvalous.gif","assets/images/SRL.gif"
  ,"assets/images/tyson.gif"];

  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("myLives");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // Play
  getWord = function () {
    word = championBoxers[0];
    console.log(word);
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      guess.innerHTML = "_";
      guesses.push(guess);
      console.log(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  document.onkeyup = function(event) {
    if (guesses == '') {
      getWord();
      lives = 10;
    } else {
      check(event.key);
    }
  };

 check = function (newGuess) {
    var guess = newGuess;
    console.log(guess);
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    var j = (word.indexOf(guess));
    console.log(j);
    if (j === -1) { lives -= 1; }
    livesRemaining();
  };



  // Show lives
   livesRemaining = function () {

    //if only 5 lives remain, display the boxers gif image
    //championBoxersPhoto[0] is src for Ali
    if (lives == 5) { showClue.innerHTML = "display image" };

    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  };

  };

      // Animate man

      //create Canvas
      //tutorial on w3 schools about Canvas
      //draw the cursor where to go and draw the line
      //draw circles  context.stroke draws the line


//   var animate = function () {
//     var drawMe = lives ;
//     drawArray[drawMe]();
//   }
//
//
//    // Hangman
//   canvas =  function(){
//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
//
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
//
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
//
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke();
// }
//
//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
//
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
//
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
//
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
//
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
//
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
//
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
//
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
//
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
//
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];





  // Hint

  // hint.onclick = function() {
  //
  //     hints = [
  //       ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
  //       ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
  //       ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
  //   ];
  //
  //   var catagoryIndex = categories.indexOf(chosenCategory);
  //   var hintIndex = chosenCategory.indexOf(word);
  //   showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  // };

   // Reset

  // document.getElementById('reset').onclick = function() {
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   showClue.innerHTML = "";
  //   context.clearRect(0, 0, 400, 400);
  //   play();
  // }
//}
