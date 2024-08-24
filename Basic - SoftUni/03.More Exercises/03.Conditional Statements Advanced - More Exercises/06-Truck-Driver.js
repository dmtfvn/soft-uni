function solveCurTask(input) {
  let season = input[0];
  let kmPerMonth = Number(input[1]);

  let salary = 0;
  let period = 4;
  let taxes = 0.90;

  if (kmPerMonth <= 5000) {
    switch (season) {
      case 'Spring':
      case 'Autumn':
        salary = kmPerMonth * 0.75 * period * taxes;

        console.log(salary.toFixed(2));
        break;
      case 'Summer':
        salary = kmPerMonth * 0.90 * period * taxes;

        console.log(salary.toFixed(2));
        break;
      case 'Winter':
        salary = kmPerMonth * 1.05 * period * taxes;

        console.log(salary.toFixed(2));
        break;
    }
  } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
    switch (season) {
      case 'Spring':
      case 'Autumn':
        salary = kmPerMonth * 0.95 * period * taxes;

        console.log(salary.toFixed(2));
        break;
      case 'Summer':
        salary = kmPerMonth * 1.10 * period * taxes;

        console.log(salary.toFixed(2));
        break;
      case 'Winter':
        salary = kmPerMonth * 1.25 * period * taxes;

        console.log(salary.toFixed(2));
        break;
    }
  } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
    switch (season) {
      case 'Spring':
      case 'Autumn':
      case 'Summer':
      case 'Winter':
        salary = kmPerMonth * 1.45 * period * taxes;
        console.log(salary.toFixed(2));
        break;
    } 
  }
}

solveCurTask(["Spring", "16942"]);