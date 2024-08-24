function solveCurTask(input) {
  let eggSize = input[0];
  let eggColor = input[1];
  let eggCount = Number(input[2]);

  let finalCost = 0;

  switch (eggSize) {
    case 'Large':
      if (eggColor === 'Red') {
        finalCost = eggCount * 16;
      } else if (eggColor === 'Green') {
        finalCost = eggCount * 12;
      } else if (eggColor === 'Yellow') {
        finalCost = eggCount * 9;
      }
      break;
    case 'Medium':
      if (eggColor === 'Red') {
        finalCost = eggCount * 13;
      } else if (eggColor === 'Green') {
        finalCost = eggCount * 9;
      } else if (eggColor === 'Yellow') {
        finalCost = eggCount * 7;
      }
      break;
    case 'Small':
      if (eggColor === 'Red') {
        finalCost = eggCount * 9;
      } else if (eggColor === 'Green') {
        finalCost = eggCount * 8;
      } else if (eggColor === 'Yellow') {
        finalCost = eggCount * 5;
      }
      break;
  }

  console.log(`${(finalCost * 0.65).toFixed(2)} leva.`);
}

solveCurTask(["Large", "Red", "7"]);