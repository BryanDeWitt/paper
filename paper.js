document.addEventListener('DOMContentLoaded', function(){
    const choices = ["rock", "paper", "scissors"]
    let playerScore = 0
    let pcScore = 0
    const div = document.querySelector('#container');
    const pc = document.querySelector('#pc');
    const player = document.querySelector('#player');
    function playRound(choice1, choice2){
        if (choice1 === "rock" && choice2 === "scissors") {
            div.textContent = `You win ${choice1} beats ${choice2}`;
            playerScore++
            pc.textContent = `PC score: ${pcScore}`;
            player.textContent = `Your score: ${playerScore}`;
        }else if(choice1 === "scissors" && choice2 === "paper"){
            div.textContent = `You win ${choice1} beats ${choice2}`;
            playerScore++
            pc.textContent = `PC score: ${pcScore}`;
            player.textContent = `Your score: ${playerScore}`;
        }else if(choice1 === "paper" && choice2 === "rock"){
            div.textContent = `You win ${choice1} beats ${choice2}`;
            playerScore++
            pc.textContent = `PC score: ${pcScore}`;
            player.textContent = `Your score: ${playerScore}`;
        }else if(choice1 === choice2){
            div.textContent = "Draw";
            pc.textContent = `PC score: ${pcScore}`;
            player.textContent = `Your score: ${playerScore}`;
        }else{
            div.textContent = `You win ${choice1} beats ${choice2}`;
            pcScore++
            pc.textContent = `PC score: ${pcScore}`;
            player.textContent = `Your score: ${playerScore}`;
        }
    }
    
    const buttons = Array.from(document.querySelectorAll('button'));
    let pcChoice = () => choices[Math.ceil(Math.random() * choices.length) - 1]
    let playerChoice;
    function letsPlay(){
        buttons.forEach(choice => choice.addEventListener('click', (e) =>{
            playerChoice = e.target.id;
            playRound(playerChoice, pcChoice());
        }))
    }
    

    letsPlay()
    
        
    

    
})