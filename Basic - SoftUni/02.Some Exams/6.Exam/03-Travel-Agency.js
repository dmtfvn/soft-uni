function solveCurTask(input) {
  let cityName = input[0];
  let withOrWithout = input[1];
  let vipDiscount = input[2];
  let totalDays = Number(input[3]);

  let singleDayPrice = 0;
  
  switch (cityName) {
    case 'Bansko':
    case 'Borovets':
      if (withOrWithout === 'noEquipment') {
        singleDayPrice = 80;

        if (vipDiscount === 'yes') {
          singleDayPrice *= 0.95;
        } else if (vipDiscount === 'no') {
          singleDayPrice;
        }
      } else if (withOrWithout === 'withEquipment') {
        singleDayPrice = 100;

        if (vipDiscount === 'yes') {
          singleDayPrice *= 0.90;
        } else if (vipDiscount === 'no') {
          singleDayPrice;
        }
      }
      break;
    case 'Varna':
    case 'Burgas':
      if (withOrWithout === 'noBreakfast') {
        singleDayPrice = 100;

        if (vipDiscount === 'yes') {
          singleDayPrice *= 0.93;
        } else if (vipDiscount === 'no') {
          singleDayPrice;
        }
      } else if (withOrWithout === 'withBreakfast') {
        singleDayPrice = 130;

        if (vipDiscount === 'yes') {
          singleDayPrice *= 0.88;
        } else if (vipDiscount === 'no') {
          singleDayPrice;
        }
      }
      break;
  }

  let finalPrice = singleDayPrice * totalDays;

  if (totalDays <= 0) {
    console.log('Days must be positive number!');
  } else if (totalDays <= 7) {
    if ((cityName === 'Bansko' || cityName === 'Borovets' || cityName === 'Varna' || cityName === 'Burgas') && (withOrWithout === 'noEquipment' || withOrWithout === 'withEquipment' || withOrWithout === 'noBreakfast' || withOrWithout === 'withBreakfast')) {
      console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    } else {
      console.log('Invalid input!');
    }
  } else if (totalDays > 7) {
    let dayMinusOne = totalDays - 1;
    finalPrice = singleDayPrice * dayMinusOne;

    if ((cityName === 'Bansko' || cityName === 'Borovets' || cityName === 'Varna' || cityName === 'Burgas') && (withOrWithout === 'noEquipment' || withOrWithout === 'withEquipment' || withOrWithout === 'noBreakfast' || withOrWithout === 'withBreakfast')) {
      console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    } else {
      console.log('Invalid input!');
    }
  }
}

solveCurTask(["Borovets", "noEquipment", "yes", "6"]);