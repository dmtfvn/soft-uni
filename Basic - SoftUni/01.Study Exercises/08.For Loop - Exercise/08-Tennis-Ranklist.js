function solveCurTask(input) {
  let tournamentsCount = Number(input[0]);
  let initialPoints = Number(input[1]);

  let pointsWon = 0;
  let winsCount = 0;

  for (let i = 2; i < tournamentsCount + 2; i++) {
    let result = input[i];

    if (result === 'W') {
      pointsWon += 2000;
      winsCount++;
    } else if (result === 'F') {
      pointsWon += 1200;
    } else if (result === 'SF') {
      pointsWon += 720;
    }
  }

  let finalPoints = initialPoints + pointsWon;
  console.log(`Final points: ${finalPoints}`);

  let avgPoints = (pointsWon / tournamentsCount);
  console.log(`Average points: ${Math.floor(avgPoints)}`);

  let percentWon = (winsCount / tournamentsCount) * 100;
  console.log(`${percentWon.toFixed(2)}%`);
}

solveCurTask(["5", "1400", "F", "SF", "W", "W", "SF"]);