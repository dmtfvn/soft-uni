function solveCurTask(integer) {
  let binaryNum = '';

  while (integer !== 0) {
    const leftover = integer % 2;

    binaryNum = binaryNum.concat(leftover);

    integer = Math.floor(integer / 2);
  }

  const result = binaryNum.split('').reverse().join('');

  console.log(`${result}`);
}

solveCurTask(217);