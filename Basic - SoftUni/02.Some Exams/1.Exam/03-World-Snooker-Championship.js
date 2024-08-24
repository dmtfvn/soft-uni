function solveCurTask(input) {
  let champStage = input[0];
  let ticketType = input[1];
  let ticketCount = Number(input[2]);
  let photo = input[3];

  let price = 0;

  switch (champStage) {
    case 'Quarter final':
      if (ticketType === 'Standard') {
        price = 55.50;
      } else if (ticketType === 'Premium') {
        price = 105.20;
      } else if (ticketType === 'VIP') {
        price = 118.90;
      }
      break;
    case 'Semi final':
      if (ticketType === 'Standard') {
        price = 75.88;
      } else if (ticketType === 'Premium') {
        price = 125.22;
      } else if (ticketType === 'VIP') {
        price = 300.40;
      }
      break;
    case 'Final':
      if (ticketType === 'Standard') {
        price = 110.10;
      } else if (ticketType === 'Premium') {
        price = 160.66;
      } else if (ticketType === 'VIP') {
        price = 400;
      }
      break;
  }

  let finalPrice = ticketCount * price;

  if (finalPrice <= 2500) {
    if (photo === 'Y') {
      finalPrice += ticketCount * 40;
    }
  } else if (finalPrice > 2500 && finalPrice <= 4000) {
    finalPrice *= 0.90;

    if (photo === 'Y') {
      finalPrice += ticketCount * 40;
    }
  } else if (finalPrice > 4000) {
    finalPrice *= 0.75;
  }

  console.log(finalPrice.toFixed(2));
}

solveCurTask(["Semi final", "VIP", "9", "Y"]);