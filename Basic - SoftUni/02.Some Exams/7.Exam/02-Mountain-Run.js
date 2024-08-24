function solveCurTask(input) {
  let recordInSec = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let oneMeterClimbInSec = Number(input[2]);

  let totalTime = distanceInMeters * oneMeterClimbInSec;
  let delayTime = Math.floor(distanceInMeters / 50) * 30;
  let sumTotalAndDelay = totalTime + delayTime;

  if (sumTotalAndDelay < recordInSec) {
    console.log(`Yes! The new record is ${sumTotalAndDelay.toFixed(2)} seconds.`);
  } else if (sumTotalAndDelay >= recordInSec) {
    console.log(`No! He was ${(sumTotalAndDelay - recordInSec).toFixed(2)} seconds slower.`);
  }
}

solveCurTask(["10164", "1400", "25"]);