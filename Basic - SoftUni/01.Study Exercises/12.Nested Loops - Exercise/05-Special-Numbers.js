function solveCurTask(input) {
  let num = Number(input[0]);
  let result = '';

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          let special = num % i === 0 && num % j === 0 && num % k === 0 && num % l === 0;

          if (special) {
            result += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }

  console.log(result);
}

solveCurTask(["3"]);