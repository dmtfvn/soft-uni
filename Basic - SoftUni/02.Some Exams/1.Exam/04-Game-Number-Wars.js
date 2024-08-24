function solveCurTask(input) {
  let firstPlayerName = input[0];
  let secondPlayerName = input[1];

  let playerOneResult = 0;
  let playerTwoResult = 0;

  let i = 2;
  let current = input[i];

  while (current !== 'End of game') {
    let player1Card = Number(input[i]);
    let player2Card = Number(input[i + 1]);

    if (player1Card > player2Card) {
      playerOneResult += (player1Card - player2Card);
    }

    if (player2Card > player1Card) {
      playerTwoResult += (player2Card - player1Card);
    }

    if (player1Card === player2Card) {
      console.log('Number wars!');

      i += 2;

      player1Card = Number(input[i]);
      player2Card = Number(input[i + 1]);

      if (player1Card > player2Card) {
        console.log(`${firstPlayerName} is winner with ${playerOneResult} points`);
      }

      if (player2Card > player1Card) {
        console.log(`${secondPlayerName} is winner with ${playerTwoResult} points`);
      }

      break;
    }

    i += 2;
    current = input[i];
  }

  if (current === 'End of game') {
    console.log(`${firstPlayerName} has ${playerOneResult} points`);
    console.log(`${secondPlayerName} has ${playerTwoResult} points`);
  }
}

solveCurTask(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);