function solveCurTask(input) {
  let friut = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);
  let price = 0;

  if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
    switch (friut) {
      case 'banana':
        price = quantity * 2.50;
        break;
      case 'apple':
        price = quantity * 1.20;
        break;
      case 'orange':
        price = quantity * 0.85;
        break;
      case 'grapefruit':
        price = quantity * 1.45;
        break;
      case 'kiwi':
        price = quantity * 2.70;
        break;
      case 'pineapple':
        price = quantity * 5.50;
        break;
      case 'grapes':
        price = quantity * 3.85;
        break;
    }
  } else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    switch (friut) {
      case 'banana':
        price = quantity * 2.70;
        break;
      case 'apple':
        price = quantity * 1.25;
        break;
      case 'orange':
        price = quantity * 0.90;
        break;
      case 'grapefruit':
        price = quantity * 1.60;
        break;
      case 'kiwi':
        price = quantity * 3.00;
        break;
      case 'pineapple':
        price = quantity * 5.60;
        break;
      case 'grapes':
        price = quantity * 4.20;
        break;
    }
  }

  if (dayOfWeek !== 'Monday' && dayOfWeek !== 'Tuesday' && dayOfWeek !== 'Wednesday' && dayOfWeek !== 'Thursday' && dayOfWeek !== 'Friday' && dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday') {
    console.log('error');   
  } else if (friut !== 'banana' && friut !== 'apple' && friut !== 'orange' && friut !== 'grapefruit' && friut !== 'kiwi' && friut !== 'pineapple' && friut !== 'grapes') {
    console.log('error');
  } else {
    console.log(price.toFixed(2));
  }
}

solveCurTask(["tomato", "Monday", "0.5"]);