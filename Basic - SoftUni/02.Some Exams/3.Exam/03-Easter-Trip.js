function solveCurTask(input) {
  let destination = input[0];
  let dateRange = input[1];
  let nightsCount = Number(input[2]);

  let totalCost = 0;

  switch (destination) {
    case 'France':
      if (dateRange === '21-23') {
        totalCost = nightsCount * 30;
      } else if (dateRange === '24-27') {
        totalCost = nightsCount * 35;
      } else if (dateRange === '28-31') {
        totalCost = nightsCount * 40;
      }
      break;
    case 'Italy':
      if (dateRange === '21-23') {
        totalCost = nightsCount * 28;
      } else if (dateRange === '24-27') {
        totalCost = nightsCount * 32;
      } else if (dateRange === '28-31') {
        totalCost = nightsCount * 39;
      }
      break;
    case 'Germany':
      if (dateRange === '21-23') {
        totalCost = nightsCount * 32;
      } else if (dateRange === '24-27') {
        totalCost = nightsCount * 37;
      } else if (dateRange === '28-31') {
        totalCost = nightsCount * 43;
      }
      break;
  }

  console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);
}

solveCurTask(["Germany", "24-27", "5"]);