function solveCurTask(input) {
  let nameOfSeries = input[0];
  let episodeDuration = Number(input[1]);
  let restDuration = Number(input[2]);

  let lunchTime = restDuration / 8;
  let restTime = restDuration / 4;

  let timeLeft = restDuration - lunchTime - restTime;

  if (timeLeft >= episodeDuration) {
    console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
  }
}

solveCurTask(["Teen Wolf", "48", "60"]);