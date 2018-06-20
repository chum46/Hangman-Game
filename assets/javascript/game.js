// Array of words for the game, theme: Famous Painters
var PAINTERS = ["pollock", "dali", "monet", "picasso", "warhol", "seurat"];

// Randomly selects a string from the PAINTERS array
Puzzle_Word = PAINTERS[Math.floor(Math.random()*PAINTERS.length)];
charCount = Puzzle_Word.length;
// Sets the puzzle with the appropriate number of blanks __

function displayBlanks(charCount) {
    blanks=" ";
    for(var i=0; i < charCount; i++){
        blanks = blanks += "__ ";
    };
    console.log(blanks);
};

// Event listener

// Checks if the key from the event listener matches any character in the puzzle word
// function letterCheck(Puzzle_Word, key) {
//     for(var i=0; i < PAINTERS.length; i++)
//         var puzzleChar = Puzzle_Word.charAt(i);

// };