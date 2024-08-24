function solveCurTask(input) {
  let openHour = Number(input[0]);
  let dayOfWeek = input[1];

  if (openHour >= 10 && openHour < 18 && dayOfWeek !== 'Sunday') {
    console.log('open');
  } else if (openHour = 18 || dayOfWeek === 'Sunday') {
    console.log('closed');
  }
}

solveCurTask(["11", "Sunday"]);