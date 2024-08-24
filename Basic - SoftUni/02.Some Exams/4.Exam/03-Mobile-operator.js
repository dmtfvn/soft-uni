function solveCurTask(input) {
  let contractDuration = input[0];
  let contractType = input[1];
  let isMobileInternet = input[2];
  let monthsToPay = Number(input[3]);

  let finalCost = 0;

  switch (contractType) {
    case 'Small':
      if (contractDuration === 'one') {
        finalCost = 9.98;
      } else if (contractDuration === 'two') {
        finalCost = 8.58;
      }
      break;
    case 'Middle':
      if (contractDuration === 'one') {
        finalCost = 18.99;
      } else if (contractDuration === 'two') {
        finalCost = 17.09;
      }
      break;
    case 'Large':
      if (contractDuration === 'one') {
        finalCost = 25.98;
      } else if (contractDuration === 'two') {
        finalCost = 23.59;
      }
      break;
    case 'ExtraLarge':
      if (contractDuration === 'one') {
        finalCost = 35.99;
      } else if (contractDuration === 'two') {
        finalCost = 31.79;
      }
      break;
  }

  if (isMobileInternet === 'yes') {
    if (finalCost <= 10) {
      finalCost += 5.50;
    } else if (finalCost <= 30) {
      finalCost += 4.35;
    } else if (finalCost > 30) {
      finalCost += 3.85;
    }
  } else if (isMobileInternet === 'no') {
    finalCost;
  }

  if (contractDuration === 'two') {
    finalCost *= 0.9625;
  } else if (contractDuration === 'one') {
    finalCost;
  }

  let totalToPay = monthsToPay * finalCost;

  console.log(`${totalToPay.toFixed(2)} lv.`);
}

solveCurTask(["two", "Large", "no", "10"]);