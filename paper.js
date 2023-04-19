document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let pcScore = 0;
  const div = document.querySelector("#container");
  const result = document.querySelector("#result");
  const pc = document.querySelector("#pc");
  const player = document.querySelector("#player");
  function playRound(choice1, choice2) {
    if (choice1 === "rock" && choice2 === "scissors") {
      result.textContent = `You win ${choice1} beats ${choice2}`;
      playerScore++;
      pc.textContent = `PC score: ${pcScore}`;
      player.textContent = `Your score: ${playerScore}`;
      return;
    } else if (choice1 === "scissors" && choice2 === "paper") {
      result.textContent = `You win ${choice1} beats ${choice2}`;
      playerScore++;
      pc.textContent = `PC score: ${pcScore}`;
      player.textContent = `Your score: ${playerScore}`;
      return;
    } else if (choice1 === "paper" && choice2 === "rock") {
      result.textContent = `You win ${choice1} beats ${choice2}`;
      playerScore++;
      pc.textContent = `PC score: ${pcScore}`;
      player.textContent = `Your score: ${playerScore}`;
      return;
    } else if (choice1 === choice2) {
      result.textContent = "Draw";
      pc.textContent = `PC score: ${pcScore}`;
      player.textContent = `Your score: ${playerScore}`;
      return;
    } else {
      result.textContent = `You win ${choice1} beats ${choice2}`;
      pcScore++;
      pc.textContent = `PC score: ${pcScore}`;
      player.textContent = `Your score: ${playerScore}`;
      return;
    }
  }
  const body = document.querySelector("body");
  const buttons = document.querySelectorAll("button");
  let pcChoice = () => choices[Math.ceil(Math.random() * choices.length) - 1];
  let playerChoice;
  buttons.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      playerChoice = e.target.id;
      playRound(playerChoice, pcChoice());
      if (playerScore === 5) {
        body.innerHTML =
          '<h1>You Win!!!!!!</h1><button onClick="window.location.reload();">Play Again</button>';
      } else if (pcScore === 5) {
        body.innerHTML =
          '<h3>You have lost...</h3><button onClick="window.location.reload();">Play Again</button>';
      }
    })
  );
});


