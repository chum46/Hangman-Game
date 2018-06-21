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

        // Testing / Debugging

        console.log(Puzzle_Word);
        console.log(Word_Letters);
        console.log(Char_Count);
        console.log(Unsolved_Puzzle);

        // 
        document.getElementById('puzzleWord').innerHTML=Unsolved_Puzzle.join("");
    };
    
    // Store what letter is pressed in a local variable keyPress
    // Cycle Word_Letters array to see if keyPress matches 
    // Store the index numbers in an array
    // Replace blanks in Unsolved_Puzzle with the keyPress letter
    // at the appropriate index number
    // Run this function till Unsolved_Puzzle has no more blanks
    
    // FUNCTION CALLOUTS
    gameStart();