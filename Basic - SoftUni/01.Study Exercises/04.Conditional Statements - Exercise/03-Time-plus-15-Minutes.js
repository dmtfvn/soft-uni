function solveCurTask(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let addMinutes = minutes + 15;

  if (addMinutes >= 60) {
    hours = hours + 1;
    addMinutes = addMinutes - 60;
  }

  if (hours === 24) {
    hours = 0;
  }

  if (addMinutes < 10) {
    console.log(`${hours}:0${addMinutes}`);
  } else {
    console.log(`${hours}:${addMinutes}`);
  }
}

solveCurTask(["1", "46"]);