function solveCurTask(input) {
  let n = Number(input[0]);

  let current = 1;

  let isBigger = false;
  let printCurrLine = '';

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }

      printCurrLine += `${current} `;
      current++;
    }

    console.log(printCurrLine);

    printCurrLine = '';

    if (isBigger) {
      break;
    }
  }
}

solveCurTask(["7"]);