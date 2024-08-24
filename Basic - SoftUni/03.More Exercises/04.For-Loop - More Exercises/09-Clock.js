function solveCurTask() {
  for (let hours = 0; hours <= 23; hours++) {
    let result = '';

    for (let minutes = 0; minutes <= 59; minutes++) {
      result += `${hours} : ${minutes}\n`;
    }

    console.log(result.trim());
  }
}

solveCurTask();