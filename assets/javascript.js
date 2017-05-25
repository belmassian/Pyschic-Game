   var options = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var wins = 0
      var losses= 0
      var Guesses Left = 9

     
      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
        var userGuess = event.key;
        var computerGuess = options[Math.floor(Math.random() * options.length)];
        if ((userGuess === computerGuess)) {
          wins++;
        } else {
          GuessesLeft--;
        }
        if (GuessesLeft === 0) {
          losses++
        }
      
           var winsText = document.getElementById('wins'); 
           winsText.innerText = wins;
           var lossesText = document.getElementById ('losses');
           lossesText.innerText = losses; 
           var GuessesLeftText = document.getElementById ('GuessesLeft');
           GuessesLeftText.innerText = GuessesLeft;
        }

      }