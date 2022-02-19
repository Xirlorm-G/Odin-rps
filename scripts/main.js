/* rock paper scissors,
 * An assignment given by theodinproject.com.
 * A rock paper scissors game.
 */


//Play the game at the event of a click
let player = 0, computer = 0
let buttons = document.querySelectorAll('.controls > .option')
for (let i = 0;i<buttons.length;++i){
    buttons[i].addEventListener('click',game)
}


//Begin game session
function game(e){
    let playerSelection = e.target.getAttribute('data-key')
    let computerSelection = computerPlay()
    let result = playRound(playerSelection, computerSelection)
    let message = ''

    //check who wins and update scores
    if((player<5)&&(computer<5)){
        if (result == 0) {
            computer++
            message = `You lost! ${computerSelection} beats ${playerSelection}`
        }
        else if (result == 2) {
            player++
            message = 'You win!'
        }
        else if (result == 1){
            computer++
            player++
            message = 'That\'s a tie!'
        }
        
        //Display who won at the last round
        if(player>4 || computer>4){
            if(player>computer) message = ['You won the game!',
                                        'You\'re the winner!',
                                        'You win!'][Math.floor(Math.random()*3)];
            else if(computer>player) message = 'You lost to the computer'
            else message = 'You had a tie in this game'
        }

        //display the results of each game
        displayResult(player, computer, message, playerSelection, computerSelection)

        //Replay Game
        let replay = document.querySelector('#replay')
        replay.addEventListener('click',()=>{
            computer = 0
            player = 0
            displayResult(player, computer, '\n', '\n', '\n')
        });

    }
}


//Computer makes a random selection.
function computerPlay(){
    return ['rock','paper','scissors'][Math.floor(Math.random()*3)]
}


//Check who wins the round.
function playRound(playerSelection, computerSelection){
    if((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')){
            return 0;
    }else if(playerSelection == computerSelection){return 1}
    else{ return 2} 
}


//Display the results of the game
function displayResult (playerScore, computerScore, message, playerChoice, computerChoice) {
    document.querySelector('.player-score').innerText = playerScore
    document.querySelector('.computer-score').innerText = computerScore
    document.querySelector('.win-message').innerText = message
    document.querySelector('#player-choice').innerText = playerChoice
    document.querySelector('#computer-choice').innerText = computerChoice
}

