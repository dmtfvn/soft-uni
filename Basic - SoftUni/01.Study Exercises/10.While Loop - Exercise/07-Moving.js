function solveCurTask(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);

  let freeSpace = length * width * height;

  let i = 3;
  let row = input[i];

  while (row !== 'Done') {
    let boxes = Number(row);
    freeSpace -= boxes;

    if (freeSpace <= 0) {
      console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
      break;
    }

    i++;
    row = input[i];
  }

  if (freeSpace > 0) {
    console.log(`${freeSpace} Cubic meters left.`);
  }
}

solveCurTask(["10", "10", "2", "20", "20", "20", "20", "122"]);