   var options = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var wins = 0
      var losses= 0
      var Guesses = 9
      var GuessesLeft = 9
      var guessedLetters = []
      var LettertoGuess = null

      var computerGuess = options[Math.floor(Math.random() * options.length)];

      var updateGuessesLeft = function() {
      document.querySelector('#GuessesLeft').innerHTML = " " + GuessesLeft;
    };

     var updateLettertoGuess = function () {
          this.LettertoGuess = this.options[Math.floor(Math.random() * this.options.length)];
    };

      var updateguessedLetters = function() {
      document.querySelector('#guessedLetters').innerHTML = " " + guessedLetters.join(', ');
    };

      var reset = function() {
        totalGuesses = 9;
        GuessesLeft = 9;
        guessedLetters = [];

        updateLettertoGuess();
        updateGuessesLeft(9);
        updateguessedLetters();
      }

      updateLettertoGuess();
      updateGuessesLeft(9); 

      document.onkeyup = function(event) {
            GuessesLeft--;
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateguessedLetters();

        if (GuessesLeft > 0) {
             if (userGuess === LettertoGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = " " + wins;
                reset();
            } 
        } else if (GuessesLeft === 0){
          losses++
          document.querySelector('#losses').innerHTML = " " + losses;
            reset();
            }
      };
    

   

        
  



