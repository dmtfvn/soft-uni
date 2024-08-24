function solveCurTask(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let studioTotal = 0;
  let apartmentTotal = 0;

  let studioPrice = 0;
  let apartmentPrice = 0;

  if (month === 'May' || month === 'October') {
    studioPrice = 50;
    apartmentPrice = 65;

    if (nights > 14) {
      studioTotal = studioPrice * nights * 0.70;
      apartmentTotal = apartmentPrice * nights * 0.90;
    } else if (nights > 7) {
      studioTotal = studioPrice * nights * 0.95;
      apartmentTotal = apartmentPrice * nights;
    } else {
      studioTotal = studioPrice * nights;
      apartmentTotal = apartmentPrice * nights;
    }
  } else if (month === 'June' || month === 'September') {
    studioPrice = 75.20;
    apartmentPrice = 68.70;

    if (nights > 14) {
      studioTotal = studioPrice * nights * 0.80;
      apartmentTotal = apartmentPrice * nights * 0.90;
    } else {
      studioTotal = studioPrice * nights;
      apartmentTotal = apartmentPrice * nights;
    }
  } else if (month === 'July' || month === 'August') {
    studioPrice = 76;
    apartmentPrice = 77;

    if (nights > 14) {
      studioTotal = studioPrice * nights;
      apartmentTotal = apartmentPrice * nights * 0.90;
    } else {
      studioTotal = studioPrice * nights;
      apartmentTotal = apartmentPrice * nights;
    }
  }

  console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
  console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}

solveCurTask(["May", "15"]);