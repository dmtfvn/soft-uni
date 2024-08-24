function solveCurTask(input) {
  let shootingTime = Number(input[0]);
  let scenesCount = Number(input[1]);
  let sceneDuration = Number(input[2]);

  let fieldPreparationTime = shootingTime * 0.15;
  let shootingScenesTime = scenesCount * sceneDuration;

  let timeNeeded = fieldPreparationTime + shootingScenesTime;

  if (timeNeeded <= shootingTime) {
    console.log(`You managed to finish the movie on time! You have ${Math.ceil(shootingTime - timeNeeded)} minutes left!`);
  } else if (timeNeeded > shootingTime) {
    console.log(`Time is up! To complete the movie you need ${Math.ceil(timeNeeded - shootingTime)} minutes.`);
  }
}

solveCurTask(["60", "15", "3"]);