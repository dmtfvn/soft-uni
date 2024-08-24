function solveCurTask() {
  for (let hours = 0; hours <= 23; hours++) {
    let result = '';

    for (let minutes = 0; minutes <= 59; minutes++) {
      for (let seconds = 0; seconds <= 59; seconds++) {
        result += `${hours} : ${minutes} : ${seconds}\n`;
      }
    }

    console.log(result.trim());
  }
}

solveCurTask();