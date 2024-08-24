function solveCurTask(arr) {
  const rowsCount = arr.shift();

  let kRowIndex;
  let kIndex;

  let rowLastIndex = arr[0].length - 1;
  let belowRowLastIndex = rowsCount - 1;

  let isOut = false;
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    const curRow = arr[i];

    if (curRow.includes('k')) {
      kRowIndex = i;
      kIndex = curRow.indexOf('k');
      break;
    }
  }

  if (kIndex - 1 < 0 || kIndex + 1 > rowLastIndex) {
    isOut = true;
    steps++;
  }

  if (!isOut) {
    for (let i = 0; i < rowsCount; i++) {
      if (isOut) {
        break;
      }

      if (arr[kRowIndex][kIndex - 1] === ' ') {
        while (arr[kRowIndex][kIndex - 1] === ' ') {
          let rowArr = arr[kRowIndex].split('');

          rowArr[kIndex - 1] = '#';
          arr[kRowIndex] = rowArr.join('');

          kIndex--;
          steps++;

          if (kIndex === 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (arr[kRowIndex][kIndex + 1] === ' ') {
        while (arr[kRowIndex][kIndex + 1] === ' ') {
          let rowArr = arr[kRowIndex].split('');

          rowArr[kIndex + 1] = '#';
          arr[kRowIndex] = rowArr.join('');

          kIndex++;
          steps++;

          if (kIndex === rowLastIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (arr[kRowIndex - 1] && arr[kRowIndex - 1][kIndex] === ' ') {
        while (arr[kRowIndex - 1] && arr[kRowIndex - 1][kIndex] === ' ') {
          let rowArr = arr[kRowIndex - 1].split('');

          rowArr[kIndex] = '#';
          arr[kRowIndex - 1] = rowArr.join('');

          kRowIndex--;
          steps++;

          if (kRowIndex === 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (arr[kRowIndex + 1] && arr[kRowIndex + 1][kIndex] === ' ') {
        while (arr[kRowIndex + 1] && arr[kRowIndex + 1][kIndex] === ' ') {
          let rowArr = arr[kRowIndex + 1].split('');

          rowArr[kIndex] = '#';
          arr[kRowIndex + 1] = rowArr.join('');

          kRowIndex++;
          steps++;

          if (kRowIndex === belowRowLastIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }
    }
  }

  if (isOut) {
    console.log(`Kate got out in ${steps} moves`);
  } else {
    console.log(`Kate cannot get out`);
  }
}

solveCurTask([
  4,
  "######",
  "##  k#",
  "## ###",
  "## ###"
]);