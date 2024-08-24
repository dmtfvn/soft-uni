function solveCurTask(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let hotel = 'Hotel';
  let hut = 'Hut';
  let camp = 'Camp';

  let locationSummer = 'Alaska';
  let locationWinter = 'Morocco';

  if (season === 'Summer') {
    if (budget <= 1000) {
      budget *= 0.65;

      console.log(`${locationSummer} - ${camp} - ${budget.toFixed(2)}`);
    } else if (budget > 1000 && budget <= 3000) {
      budget *= 0.80;

      console.log(`${locationSummer} - ${hut} - ${budget.toFixed(2)}`);
    } else if (budget > 3000) {
      budget *= 0.90;

      console.log(`${locationSummer} - ${hotel} - ${budget.toFixed(2)}`);
    }
  } else if (season === 'Winter') {
    if (budget <= 1000) {
      budget *= 0.45;

      console.log(`${locationWinter} - ${camp} - ${budget.toFixed(2)}`);
    } else if (budget > 1000 && budget <= 3000) {
      budget *= 0.60;

      console.log(`${locationWinter} - ${hut} - ${budget.toFixed(2)}`);
    } else if (budget > 3000) {
      budget *= 0.90;

      console.log(`${locationWinter} - ${hotel} - ${budget.toFixed(2)}`);
    }
  }
}

solveCurTask(["2543.99", "Winter"]);