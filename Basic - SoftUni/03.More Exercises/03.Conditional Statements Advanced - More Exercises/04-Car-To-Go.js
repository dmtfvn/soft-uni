function solveCurTask(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let cabrio = 'Cabrio';
  let jeep = 'Jeep';

  if (season === 'Summer') {
    if (budget <= 100) {
      console.log('Economy class');

      budget *= 0.35;
      console.log(`${cabrio} - ${budget.toFixed(2)}`);
    } else if (budget > 100 && budget <= 500) {
      console.log('Compact class');

      budget *= 0.45;
      console.log(`${cabrio} - ${budget.toFixed(2)}`);
    } else if (budget > 500) {
      console.log('Luxury class');

      budget *= 0.90;
      console.log(`${jeep} - ${budget.toFixed(2)}`);
    }
  } else if (season === 'Winter') {
    if (budget <= 100) {
      console.log('Economy class');

      budget *= 0.65;
      console.log(`${jeep} - ${budget.toFixed(2)}`);
    } else if (budget > 100 && budget <= 500) {
      console.log('Compact class');

      budget *= 0.80;
      console.log(`${jeep} - ${budget.toFixed(2)}`);
    } else if (budget > 500) {
      console.log('Luxury class');

      budget *= 0.90;
      console.log(`${jeep} - ${budget.toFixed(2)}`);
    }
  }
}

solveCurTask(["1010", "Winter"]);