let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
document.getElementByID("next-lbl").innerHTML = nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    for(let gameboardPlace of document.getElementsByTagName("td")){
        let button = documnet.createElement("button");
    button.innerHTML= "[ ]";
    button.type = "button";
    document.getElementById(gameboardPlace.id).appendChild(button);
}
}
    
    
    
    
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
    let btn = event.target;
    btn.innerHTML = nextPLayer;
    if(nextPlayer == 'X'){
        nextPlayer = '0';
    }else if (nextPlayer == '0'){
        nextPlayer = 'X';
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    btn.disabled = true;
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
   let gameOverHeader = document.createElement("h1");
        gameOverHeader.innerHTML = "Game Over";
        document.getElementId('game-over-lbl').appendChild(gameOverHeader);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let btns = document.querySelectorAll('button');
    let counter =0;
    for(let i=0; i<btns.length;i++)
    {
        if(btns[i].disabled == true)
            counter++;
    }
    if (counter == btns.length){
        return true;
    }
    return false;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
