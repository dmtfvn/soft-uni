function solveCurTask(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let expenses = 0;

  if (budget <= 100) {
    console.log('Somewhere in Bulgaria');

    if (season === 'summer') {
      expenses = budget * 0.70;
      console.log(`Camp - ${(budget - expenses).toFixed(2)}`);
    } else if (season === 'winter') {
      expenses = budget * 0.30;
      console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    console.log('Somewhere in Balkans');

    if (season === 'summer') {
      expenses = budget * 0.60;
      console.log(`Camp - ${(budget - expenses).toFixed(2)}`);
    } else if (season === 'winter') {
      expenses = budget * 0.20;
      console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
    }
  } else if (budget > 1000) {
    console.log('Somewhere in Europe');

    expenses = budget * 0.10;
    console.log(`Hotel - ${(budget - expenses).toFixed(2)}`);
  }
}

solveCurTask(["50", "summer"]);