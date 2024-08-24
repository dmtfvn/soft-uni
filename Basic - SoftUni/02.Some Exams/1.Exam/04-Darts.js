function solveCurTask(input) {
  let playerName = input[0];

  let initialPoints = 301;

  let i = 1;
  let current = input[i];

  let goodShot = 0;
  let badShot = 0;

  while (current !== 'Retire') {
    let sector = input[i];
    let points = Number(input[i + 1]);

    switch (sector) {
      case 'Single':
        points;

        if (points <= initialPoints) {
          goodShot++;
        } else {
          badShot++;
        }
        break;
      case 'Double':
        points *= 2;

        if (points <= initialPoints) {
          goodShot++;
        } else {
          badShot++;
        }
        break;
      case 'Triple':
        points *= 3;

        if (points <= initialPoints) {
          goodShot++;
        } else {
          badShot++;
        }
        break;
    }

    if (points > initialPoints) {
      initialPoints;
    } else {
      initialPoints -= points;
    }

    if (initialPoints === 0) {
      break;
    }

    i += 2;
    current = input[i];
  }

  if (current === 'Retire') {
    console.log(`${playerName} retired after ${badShot} unsuccessful shots.`);
  } else {
    console.log(`${playerName} won the leg with ${goodShot} shots.`);
  }
}

solveCurTask(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]);