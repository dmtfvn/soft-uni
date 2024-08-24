function solveCurTask(input) {
  let i = 0;
  let num = Number(input[i]);

  let result = 0;

  while (num >= 0) {
    result += num * 2;

    console.log(`Result: ${result.toFixed(2)}`);

    result = 0;

    i++;
    num = Number(input[i]);
  }

  console.log('Negative number!');
}

solveCurTask(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);