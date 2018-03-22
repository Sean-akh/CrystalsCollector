$(document).ready(function(){
    //declaring the variables and setting the 
var gameScore,                      // It is the number that player has to match
    randomGame,             // random numbers Game assign to the Game score
    randomDiamonds,         // it is the array that is holding the d1 through d4 values;
    dia1, dia2, dia3, dia4;
    var loseScore = 0;              // defines the lossing score of the all games
    var winScore = 0;              // defines the winning score of the all games
    var num = 0;      
    var playerScore = 0;    //set the player's score to zero
    var diamondArray = [];

/************************************* functions **********************************************************/

    //Generate Random number between 19 - 120 for var randomGame and post it in #GameScoreBoard
    function getRandomGame(){
        
        var randomGame = Math.floor((Math.random() * (120 - 19)) +19);
        return randomGame; 
    }

    //Generate Randow number between 1 - 12 for each of four diamond #ScoreBoard
    //add and show the total score on #ScoreBoard when player click on any of four diamonds
    // remove the selected number from the list to avoid two diamonds having same value
    function getDiamondArray(){
        
        var diamondArray = [];

        //create an array to remove the random number from the list
        var numRangeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        for (var i = 0; i < 4; i++) {

            //generate the random number, reset numRangeArray all minus generated random number            
            var num = Math.floor((Math.random() * numRangeArray.length));
            
            //remove the random number from numRangeArray 
            var numMinusSelected  = numRangeArray.splice(num, 1);
            var numSelected = numMinusSelected[0];

            ////////////////////console Log num, numMinusSelected ////////////
                console.log('Random Number selected is ' + num);
                console.log('Num Range Array after random selection ' + numMinusSelected);
                console.log('Selected Random ' + numSelected);
                console.log('Num Range Array in ' + i + ' round. and the new array is '+ numRangeArray);
            ///////////////////////////////////////////////////////////////////////////////////////////

            // add the random number to diamondArray.
            diamondArray.push(numSelected);                               
        }

        return diamondArray;
    }
///////////////////////////////////////////////////////////////

    randomGame = getRandomGame();
    diamondArray = getDiamondArray();

    $('#LossRow').html('<h3>LOSS:&nbsp;0</h3>');
    $('#WinRow').html('<h3>WIN:&nbsp;0</h3>');

    //Player's Score at the start
    $('#scoreBoard').append('<br><br><h3>Your Score</h3> <h2>' + playerScore + '</h2><br><br>');
    
    $('#GameScoreBoard').append('<h3>The Game\'s Score </h3><h2>' + randomGame + '</h2>');

    
    //create a variable for each item in the array
    
      
   //Assign the array's value to diamond bottons
    $('#diamond1').attr('value', diamondArray[0]);
    $('#diamond2').attr('value', diamondArray[1]);
    $('#diamond3').attr('value', diamondArray[2]);
    $('#diamond4').attr('value', diamondArray[3]);



    //Do the math on click ////////////////////////////////////////////////////////////////////
        ////////////////////console Log /////////////////////
        console.log('Player\'s Initial Score ' + playerScore);
        console.log('Game\'s Random Number ' + randomGame);
        /////////////////////////////////////////////////////

        $('.DiamondRandom').on ('click', function() {
            playerScore = Number(playerScore) + Number($(this).val());

            ////////////////////console Log /////////////////////
            console.log('the new player\'s score is: ' + playerScore);
            console.log('the Game\'s score is: ' + randomGame);
            
            /////////////////////////////////////////////////////

            if (playerScore < randomGame){

            }
            else if(playerScore == randomGame){

                    
               winScore++;

               $('#WinRow').html('<h3>WIN:&nbsp;' + winScore +'</h3>');
                    
                    // Reset the initial values
                    playerScore = 0;
                    randomGame = getRandomGame();
                    diamondArray = getDiamondArray();
                    $('#GameScoreBoard').html('<h3>The Game\'s Score </h3><h2>' + randomGame + '</h2>');
    
            }
            else {

                
                loseScore++;
``
                $('#LossRow').html('<h3>LOSS:&nbsp;' + loseScore +'</h3>');

                // Reset the initial values
                playerScore = 0;
                randomGame = getRandomGame();
                diamondArray = getDiamondArray();
                $('#GameScoreBoard').html('<h3>The Game\'s Score </h3><h2>' + randomGame + '</h2>');

            }

            ///////////////////////////////////////////////////////////////////////////////////////////////////
            $('#scoreBoard').html('<br><br><h3>The Player\'s score is:</h3> <h2>'+playerScore+'</h2><br><br>');
        });

        
 
  


});