function solveCurTask(input) {
  let pagesCount = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysCount = Number(input[2]);

  let timeForReading = pagesCount / pagesPerHour;
  let timePerDay = timeForReading / daysCount;

  console.log(timePerDay);
}

solveCurTask(["212", "20", "2"]);