const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let pcScore = 0
function playRound(choice1, choice2){
    if (choice1 === "rock" && choice2 === "scissors") {
        console.log(`You win ${choice1} beats ${choice2}`)
        playerScore++
    }else if(choice1 === "scissors" && choice2 === "paper"){
        console.log(`You win ${choice1} beats ${choice2}`)
        playerScore++
    }else if(choice1 === "paper" && choice2 === "rock"){
        console.log(`You win ${choice1} beats ${choice2}`)
        playerScore++
    }else if(choice1 === choice2){
        console.log("Draw")
    }else{
        console.log(`You lose ${choice2} beats ${choice1}`)
        pcScore++
    }
}
while(true){
    let pcChoice = choices[Math.ceil(Math.random() * choices.length) - 1]
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase()
    playRound(playerChoice, pcChoice)
    if(playerScore === 5|| pcScore === 5) break
}

if(playerScore === 5) console.log("You Win");
else console.log("You Lose");