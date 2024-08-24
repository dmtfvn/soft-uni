function solveCurTask(input) {
  let wallH = Number(input[0]);
  let wallW = Number(input[1]);
  let notToPaintP = Number(input[2]);

  let totalSpace = wallH * wallW * 4;
  let spaceToPaint = Math.ceil(totalSpace - totalSpace * (notToPaintP / 100));

  let i = 3;
  let current = input[i];

  while (current !== 'Tired!') {
    spaceToPaint -= Number(current);

    if (spaceToPaint < 0) {
      console.log(`All walls are painted and you have ${Math.abs(spaceToPaint)} l paint left!`);
      break;
    } else if (spaceToPaint === 0) {
      console.log('All walls are painted! Great job, Pesho!');
      break;
    }

    i++
    current = input[i];
  }

  if (current === 'Tired!') {
    console.log(`${spaceToPaint} quadratic m left.`);
  }
}

solveCurTask(["2", "3", "25", "6", "7", "8"]);