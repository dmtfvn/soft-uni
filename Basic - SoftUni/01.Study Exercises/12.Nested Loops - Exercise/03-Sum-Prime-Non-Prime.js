function solveCurTask(input) {
  let i = 0;
  let current = input[i];

  let sumPrime = 0;
  let sumNonPrime = 0;

  let isNonPrime = false;

  while (current !== 'stop') {
    let num = Number(current);

    if (num < 0) {
      console.log('Number is negative.');

      i++;
      current = input[i];
      continue;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isNonPrime = true;
          break;
        }
      }
    }

    if (isNonPrime) {
      sumNonPrime += num;
      isNonPrime = false;
    } else {
      sumPrime += num;
    }

    i++;
    current = input[i];
  }

  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

solveCurTask(["3", "9", "0", "7", "19", "4", "stop"]);