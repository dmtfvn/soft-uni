function solveCurTask(input) {
  let peopleCount = Number(input[0]);
  let ticketPrice = Number(input[1]);
  let sunLoungerPrice = Number(input[2]);
  let umbrellaPrice = Number(input[3]);

  let totalTicketsCost = peopleCount * ticketPrice;
  let sunLoungerUsersCost = Math.ceil(peopleCount * 0.75) * sunLoungerPrice;
  let umbrellaUsersCost = Math.ceil(peopleCount * 0.5) * umbrellaPrice;

  let totalDayCost = totalTicketsCost + sunLoungerUsersCost + umbrellaUsersCost;

  console.log(`${totalDayCost.toFixed(2)} lv.`);
}

solveCurTask(["21", "5.50", "4.40", "6.20"]);