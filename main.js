/* Rock Paper Scissors,
 * An assignment given by theodinproject.com.
 * A rock paper scissors game.
 */

//Computer makes a random selection.
function computerPlay(){
    return ['Rock','Paper','Scissors'][Math.floor(Math.random()*3)]
}

//Check who wins the round.
function playGame(playerSelection, computerSelection = computerPlay()){
    playerSelection = playerSelection.toLowerCase()
    if((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors')  ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock')){
            return `You lose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection == computerSelection){return 'draw!'}
    else{ return `You win! ${playerSelection} beats ${computerSelection}`}
}

//Playing the game for 5 times Display who wins after the round
function game(){
    let player = 0, computer = 0
    for(let i = 0; i<3; ++i){
        let playerSelection = prompt('Input your choice..')
        result = playGame(playerSelection)
        if(result.slice(0,6) == 'You win'){player += 1}
        else if(result.slice(0,7) == 'You lose'){computer += 1}
        else{
            player += 1
            computer += 1
        }
        console.log(result)
    }
        if(player > computer) console.log("You won!")
        else console.log("You lost!")
}

game()


