function solveCurTask(input) {
  let num = String(input[0]);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let curNum = Number(num[i]);

    sum += curNum;
  }

  console.log(`The sum of the digits is:${sum}`);
}

solveCurTask(["1234"]);