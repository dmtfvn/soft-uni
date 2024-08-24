function solveCurTask(input) {
  let eggsPl1 = Number(input[0]);
  let eggsPl2 = Number(input[1]);

  let i = 2;
  let current = input[i];

  while (current !== 'End') {
    let command = current;

    if (command === 'one') {
      eggsPl2--;
    } else if (command === 'two') {
      eggsPl1--;
    }

    if (eggsPl1 === 0) {
      console.log(`Player one is out of eggs. Player two has ${eggsPl2} eggs left.`);
      break;
    }

    if (eggsPl2 === 0) {
      console.log(`Player two is out of eggs. Player one has ${eggsPl1} eggs left.`);
      break;
    }

    i++;
    current = input[i];
  }

  if (current === 'End') {
    console.log(`Player one has ${eggsPl1} eggs left.`);
    console.log(`Player two has ${eggsPl2} eggs left.`);
  }
}

solveCurTask(["6", "3", "one", "two", "two", "one", "one"]);