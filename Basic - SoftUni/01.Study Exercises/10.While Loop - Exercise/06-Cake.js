function solveCurTask(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);

  let cakeSize = length * width;

  let i = 2;
  let portion = input[i];

  while (portion !== 'STOP') {
    let cakeSlice = Number(portion);
    cakeSize -= cakeSlice;

    if (cakeSize <= 0) {
      console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
      break;
    }

    i++;
    portion = input[i];
  }

  if (cakeSize > 0) {
    console.log(`${cakeSize} pieces are left.`);
  }
}

solveCurTask(["10", "10", "20", "20", "20", "20", "21"]);