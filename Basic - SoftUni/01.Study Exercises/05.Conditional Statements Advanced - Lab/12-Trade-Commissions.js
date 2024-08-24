function solveCurTask(input) {
  let city = input[0];
  let sells = Number(input[1]);
  let commission = 0;

  if (sells >= 0 && sells <= 500) {
    switch (city) {
      case 'Sofia':
        commission = sells * 5 / 100;
        break;
      case 'Varna':
        commission = sells * 4.5 / 100;
        break;
      case 'Plovdiv':
        commission = sells * 5.5 / 100;
        break;
    }
  } else if (sells > 500 && sells <= 1000) {
    switch (city) {
      case 'Sofia':
        commission = sells * 7 / 100;
        break;
      case 'Varna':
        commission = sells * 7.5 / 100;
        break;
      case 'Plovdiv':
        commission = sells * 8 / 100;
        break;
    }
  } else if (sells > 1000 && sells <= 10000) {
    switch (city) {
      case 'Sofia':
        commission = sells * 8 / 100;
        break;
      case 'Varna':
        commission = sells * 10 / 100;
        break;
      case 'Plovdiv':
        commission = sells * 12 / 100;
        break;
    }
  } else if (sells > 10000) {
    switch (city) {
      case 'Sofia':
        commission = sells * 12 / 100;
        break;
      case 'Varna':
        commission = sells * 13 / 100;
        break;
      case 'Plovdiv':
        commission = sells * 14.5 / 100;
        break;
    }
  }

  if (city !== 'Sofia' && city !== 'Varna' && city !== 'Plovdiv') {
    console.log('error');
  } else if (sells < 0) {
    console.log('error');
  } else {
    console.log(commission.toFixed(2));
  }
}

solveCurTask(["Sofia", "1500"]);