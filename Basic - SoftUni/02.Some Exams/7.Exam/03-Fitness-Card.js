function solveCurTask(input) {
  let budget = Number(input[0]);
  let gender = input[1];
  let age = Number(input[2]);
  let sport = input[3];

  let price = 0;

  switch (sport) {
    case 'Gym':
      if (gender === 'm') {
        price = 42;
      } else if (gender === 'f') {
        price = 35;
      }
      break;
    case 'Boxing':
      if (gender === 'm') {
        price = 41;
      } else if (gender === 'f') {
        price = 37;
      }
      break;
    case 'Yoga':
      if (gender === 'm') {
        price = 45;
      } else if (gender === 'f') {
        price = 42;
      }
      break;
    case 'Zumba':
      if (gender === 'm') {
        price = 34;
      } else if (gender === 'f') {
        price = 31;
      }
      break;
    case 'Dances':
      if (gender === 'm') {
        price = 51;
      } else if (gender === 'f') {
        price = 53;
      }
      break;
    case 'Pilates':
      if (gender === 'm') {
        price = 39;
      } else if (gender === 'f') {
        price = 37;
      }
      break;
  }

  if (age <= 19) {
    price *= 0.80;
  } else if (age > 19) {
    price;
  }

  if (price <= budget) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else if (price > budget) {
    console.log(`You don't have enough money! You need $${(price - budget).toFixed(2)} more.`);
  }
}

solveCurTask(["10", "m", "50", "Pilates"]);