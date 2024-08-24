function solveCurTask(input) {
  let controlMin = Number(input[0]);
  let controlSec = Number(input[1]);
  let chuteLength = Number(input[2]);
  let secPer100Meters = Number(input[3]);

  let totalControlSec = controlMin * 60 + controlSec;
  let totalDelaySec = chuteLength / 120 * 2.5;

  let contestantTime = (chuteLength / 100) * secPer100Meters - totalDelaySec;

  if (contestantTime <= totalControlSec) {
    console.log('Marin Bangiev won an Olympic quota!');
    console.log(`His time is ${contestantTime.toFixed(3)}.`);
  } else if (contestantTime > totalControlSec) {
    console.log(`No, Marin failed! He was ${(contestantTime - totalControlSec).toFixed(3)} second slower.`);
  }
}

solveCurTask(["1", "20", "1546", "12"]);