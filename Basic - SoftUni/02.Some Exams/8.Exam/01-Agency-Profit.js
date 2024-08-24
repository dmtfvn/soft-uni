function solveCurTask(input) {
  let airCompany = input[0];
  let adultTicketCount = Number(input[1]);
  let juniorTicketCount = Number(input[2]);
  let adultTicketPrice = Number(input[3]);
  let serviceFee = Number(input[4]);

  let juniorTicketPrice = adultTicketPrice * 0.30;

  let adultTicketTotalPrice = adultTicketPrice + serviceFee;
  let juniorTicketTotalPrice = juniorTicketPrice + serviceFee;

  let allTicketsTotalCost = adultTicketTotalPrice * adultTicketCount + juniorTicketTotalPrice * juniorTicketCount;

  let agencyProfit = allTicketsTotalCost * 0.20;

  console.log(`The profit of your agency from ${airCompany} tickets is ${agencyProfit.toFixed(2)} lv.`)
}

solveCurTask(["WizzAir", "15", "5", "120", "40"]);