function solveCurTask(input) {
  let teamName = input[0];
  let gamesPlayed = Number(input[1]);

  let win = 0;
  let draw = 0;
  let loss = 0;

  for (let i = 2; i <= gamesPlayed + 2; i++) {
    let score = input[i];

    if (score === 'W') {
      win++;
    } else if (score === 'D') {
      draw++;
    } else if (score === 'L') {
      loss++;
    }
  }

  let totalPoints = win * 3 + draw * 1;
  let winRatePercent = win / gamesPlayed * 100;

  if (gamesPlayed < 1) {
    console.log(`${teamName} hasn't played any games during this season.`);
  } else if (gamesPlayed >= 1) {
    console.log(`${teamName} has won ${totalPoints} points during this season.`);
    console.log('Total stats:');
    console.log(`## W: ${win}`);
    console.log(`## D: ${draw}`);
    console.log(`## L: ${loss}`);
    console.log(`Win rate: ${winRatePercent.toFixed(2)}%`);
  }
}

solveCurTask(["Chelsea", "0"]);