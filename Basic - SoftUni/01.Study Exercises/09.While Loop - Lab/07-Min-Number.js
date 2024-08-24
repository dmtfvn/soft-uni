function solveCurTask(input) {
  let i = 0;
  let command = input[i];
  i++;

  let minNum = Number.MAX_SAFE_INTEGER;

  while (command !== 'Stop') {
    let num = Number(command);

    if (minNum > num) {
      minNum = num;
    }

    command = input[i];
    i++;
  }

  console.log(minNum);
}

solveCurTask(["100", "99", "80", "70", "Stop"]);