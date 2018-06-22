    // Array of words for the game, theme: Famous Painters
    var PAINTERS = ["pollock", "dali", "monet", "picasso", "warhol", "seurat"];
    var Puzzle_Word="";
    var Word_Letters=[];
    var Unsolved_Puzzle=[];
    var Char_Count=0;
    var Wins_Count=0;
    var Wrong_Letters=[];
    var Guesses_Left=8;

    // FUNCTIONS
    function gameStart(){
        // Word is randomly selected from the array split into
        // individual characters
        Puzzle_Word = PAINTERS[Math.floor(Math.random()*PAINTERS.length)];
        Char_Count = Puzzle_Word.length;
        Word_Letters=Puzzle_Word.split("");

        // Resets the global variables
        var Wins_Count=0;
        var Unsolved_Puzzle=[];
        var Wrong_Letters=[];
        var Guesses_Left=8;

        // Gives the puzzle the correct number of blanks
        for(var i=0; i < Char_Count; i++){
            Unsolved_Puzzle.push("__ ");
        };

        // Test in Console

        console.log(Puzzle_Word);
        console.log(Word_Letters);
        console.log(Char_Count);
        console.log(Unsolved_Puzzle);

        // 
        document.getElementById('puzzleWord').innerHTML=Unsolved_Puzzle.join("");
        document.getElementById('guessesLeft').innerHTML=Guesses_Left;
        // document.getElementById('winsCount').innerHTML=Wins_Count;
    }

    function letterCheck(guessedLetter) {
        var checkTheLetter = false;
        for(var i=0; i< Char_Count; i++){
            if (Word_Letters[i]==guessedLetter) {
                checkTheLetter = true;
            }
        }

        if(checkTheLetter) {
            for(var i=0; i< Char_Count; i++){
                if (Word_Letters[i] == guessedLetter) {
                    Unsolved_Puzzle[i]= guessedLetter;
                    document.getElementById('puzzleWord').innerHTML=Unsolved_Puzzle;

                }
            }
        }
        else {
            alert("wrong");
            Wrong_Letters.push(guessedLetter);
            Guesses_Left--
            document.getElementById('guessesLeft').innerHTML=Guesses_Left;
            document.getElementById('wrongLetters').innerHTML=Wrong_Letters;
        }
    }

    function gameOver(){
        if (Word_Letters.toString()==Unsolved_Puzzle.toString()){
            Wins_Count++;
            console.log(Wins_Count);
            alert("Winner!");
            document.getElementById('winsCount').innerHTML=Wins_Count;
            gameStart();
        }

    }
    
    document.onkeyup = function(event) {
        var key_Event= String.fromCharCode(event.keyCode).toLowerCase();
        letterCheck(key_Event);
        gameOver();
        // Test in Console
        console.log(key_Event);
    }

    
    
    // Store what letter is pressed in a local variable keyPress
    // Decrease Guesses_Left by 1
    // Cycle Word_Letters array to see if keyPress matches any character 
    // Store the index numbers of the characters that match
    // Replace blanks in Unsolved_Puzzle with the keyPress letter
    // at the appropriate index number
    // Run this function till Unsolved_Puzzle has no more blanks or 
    // if keyPress doesn't match any letter add to the end of Wrong_Letters
    // When puzzle is solved increment Wins 
    // or if no more guesses, prompt Game Over and restart game
    
    // FUNCTION CALLOUTS
    gameStart();