function solveCurTask(input) {
  let i = 0;
  let current = input[i];

  let winGames = 0;
  let lostGames = 0;

  let diffWin = 0;
  let diffLost = 0;

  let gameCounter = 0;
  let allGames = 0;

  while (current !== 'End of tournaments') {
    let gameName = input[i];
    let totalGames = Number(input[i + 1]);

    gameCounter = 0;

    for (let j = 1; j <= totalGames; j++) {
      let result1 = Number(input[i + 2]);
      let result2 = Number(input[i + 3]);

      gameCounter++;

      if (result1 > result2) {
        winGames++;
        diffWin = result1 - result2;

        console.log(`Game ${gameCounter} of tournament ${gameName}: win with ${diffWin} points.`);
      } else if (result1 < result2) {
        lostGames++;
        diffLost = result2 - result1;

        console.log(`Game ${gameCounter} of tournament ${gameName}: lost with ${diffLost} points.`);
      }

      allGames++;

      i += 2;
    }

    i += 2;
    current = input[i];
  }

  console.log(`${(winGames / allGames * 100).toFixed(2)}% matches win`);
  console.log(`${(lostGames / allGames * 100).toFixed(2)}% matches lost`);
}

solveCurTask(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);