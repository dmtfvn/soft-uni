function solveCurTask(input) {
  let freeDays = Number(input[0]);
  let daysInYear = 365;
  let workingDays = daysInYear - freeDays;

  let normPlayTime = 30000;
  let onWork = 63;
  let offWork = 127;

  let totalPlayTime = workingDays * onWork + freeDays * offWork;

  let diffDown = normPlayTime - totalPlayTime;
  let diffUp = totalPlayTime - normPlayTime;

  let minutesDiffDown = diffDown / 60;
  let minutesDiffUp = diffUp / 60;

  if (totalPlayTime < normPlayTime) {
    console.log("Tom sleeps well");
    console.log(`${parseInt(minutesDiffDown)} hours and ${diffDown % 60} minutes less for play`);
  } else  if (normPlayTime < totalPlayTime) {
    console.log("Tom will run away");
    console.log(`${parseInt(minutesDiffUp)} hours and ${diffUp % 60} minutes more for play`);
  }
}

solveCurTask(["113"]);