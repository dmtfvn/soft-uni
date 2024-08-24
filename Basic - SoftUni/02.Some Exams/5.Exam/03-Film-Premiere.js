function solveCurTask(input) {
  let movieType = input[0];
  let movieAdditive = input[1];
  let ticketsCount = Number(input[2]);

  let finalTicketPrice = 0;

  switch (movieType) {
    case 'John Wick':
      if (movieAdditive === 'Drink') {
        finalTicketPrice = ticketsCount * 12;
      } else if (movieAdditive === 'Popcorn') {
        finalTicketPrice = ticketsCount * 15;
      } else if (movieAdditive === 'Menu') {
        finalTicketPrice = ticketsCount * 19;
      }
      break;
    case 'Star Wars':
      if (movieAdditive === 'Drink') {
        finalTicketPrice = ticketsCount * 18;
      } else if (movieAdditive === 'Popcorn') {
        finalTicketPrice = ticketsCount * 25;
      } else if (movieAdditive === 'Menu') {
        finalTicketPrice = ticketsCount * 30;
      }
      break;
    case 'Jumanji':
      if (movieAdditive === 'Drink') {
        finalTicketPrice = ticketsCount * 9;
      } else if (movieAdditive === 'Popcorn') {
        finalTicketPrice = ticketsCount * 11;
      } else if (movieAdditive === 'Menu') {
        finalTicketPrice = ticketsCount * 14;
      }
      break;
  }

  if (movieType === 'Star Wars' && ticketsCount >= 4) {
    finalTicketPrice *= 0.70;
  }

  if (movieType === 'Jumanji' && ticketsCount === 2) {
    finalTicketPrice *= 0.85;
  }

  console.log(`Your bill is ${finalTicketPrice.toFixed(2)} leva.`);
}

solveCurTask(["John Wick", "Drink", "6"]);