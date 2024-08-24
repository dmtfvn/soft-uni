function solveCurTask(input) {
  let fuelType = input[0];
  let litersFuel = Number(input[1]);

  if (litersFuel >= 25) {
    switch (fuelType) {
      case 'Diesel':
      case 'Gasoline':
      case 'Gas':
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
        break;
      default:
        console.log('Invalid fuel!');
        break;
    }
  } else if (litersFuel < 25) {
    switch (fuelType) {
      case 'Diesel':
      case 'Gasoline':
      case 'Gas':
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        break;
      default:
        console.log('Invalid fuel!');
        break;
    }
  }
}

solveCurTask(["Gasoline", "40"]);