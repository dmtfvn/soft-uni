function solveCurTask(input) {
  let eggsCount = Number(input[0]);

  let maxEggs = Number.MIN_SAFE_INTEGER;
  let color = '';

  let redEggs = 0;
  let orangeEggs = 0;
  let blueEggs = 0;
  let greenEggs = 0;

  for (let i = 1; i <= eggsCount; i++) {
    let current = input[i];

    if (current === 'red') {
      redEggs++;

      if (maxEggs < redEggs) {
        maxEggs = redEggs;
        color = 'red';
      }
    } else if (current === 'orange') {
      orangeEggs++;

      if (maxEggs < orangeEggs) {
        maxEggs = orangeEggs;
        color = 'orange';
      }
    } else if (current === 'blue') {
      blueEggs++;

      if (maxEggs < blueEggs) {
        maxEggs = blueEggs;
        color = 'blue';
      }
    } else if (current === 'green') {
      greenEggs++;

      if (maxEggs < greenEggs) {
        maxEggs = greenEggs;
        color = 'green';
      }
    }
  }

  console.log(`Red eggs: ${redEggs}`);
  console.log(`Orange eggs: ${orangeEggs}`);
  console.log(`Blue eggs: ${blueEggs}`);
  console.log(`Green eggs: ${greenEggs}`);
  console.log(`Max eggs: ${maxEggs} -> ${color}`);
}

solveCurTask(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);