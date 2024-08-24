function solveCurTask(input) {
  let recordInSec = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSec = Number(input[2]);

  let totalTime = distanceInMeters * timeInSec;
  let delayTime = Math.floor(distanceInMeters / 15) * 12.5;

  let actualTime = totalTime + delayTime;

  if (actualTime < recordInSec) {
    console.log(`Yes, he succeeded! The new world record is ${actualTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${(actualTime - recordInSec).toFixed(2)} seconds slower.`);
  }
}

solveCurTask(["10464", "1500", "20"]);