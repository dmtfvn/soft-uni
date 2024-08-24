function solveCurTask(input) {
  let endHeight = Number(input[0]);

  let startHeight = endHeight - 30;

  let jumpCounts = 0;
  let jumpAttemps = 0;

  let isEnd = false;

  let i = startHeight;
  let j = 1;

  while (i <= endHeight) {
    while (j <= input.length) {
      let current = Number(input[j]);

      if (current > startHeight) {
        startHeight += 5;
        jumpAttemps = 0;
      } else {
        jumpAttemps++;
      }

      jumpCounts++;

      if (jumpAttemps === 3) {
        isEnd = true;
        break;
      }

      i = startHeight;
      j++;

      break;
    }

    if (isEnd) {
      break;
    }
  }

  if (!isEnd) {
    console.log(`Tihomir succeeded, he jumped over ${endHeight}cm after ${jumpCounts} jumps.`);
  } else {
    console.log(`Tihomir failed at ${startHeight}cm after ${jumpCounts} jumps.`);
  }
}

solveCurTask(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);