function solveCurTask(input) {
  let movieName = input[0];
  let hallType = input[1];
  let ticketsCount = Number(input[2]);

  let totalRevenue = 0;

  switch (movieName) {
    case 'A Star Is Born':
      if (hallType === 'normal') {
        totalRevenue = ticketsCount * 7.50;
      } else if (hallType === 'luxury') {
        totalRevenue = ticketsCount * 10.50;
      } else if (hallType === 'ultra luxury') {
        totalRevenue = ticketsCount * 13.50;
      }
      break;
    case 'Bohemian Rhapsody':
      if (hallType === 'normal') {
        totalRevenue = ticketsCount * 7.35;
      } else if (hallType === 'luxury') {
        totalRevenue = ticketsCount * 9.45;
      } else if (hallType === 'ultra luxury') {
        totalRevenue = ticketsCount * 12.75;
      }
      break;
    case 'Green Book':
      if (hallType === 'normal') {
        totalRevenue = ticketsCount * 8.15;
      } else if (hallType === 'luxury') {
        totalRevenue = ticketsCount * 10.25;
      } else if (hallType === 'ultra luxury') {
        totalRevenue = ticketsCount * 13.25;
      }
      break;
    case 'The Favourite':
      if (hallType === 'normal') {
        totalRevenue = ticketsCount * 8.75;
      } else if (hallType === 'luxury') {
        totalRevenue = ticketsCount * 11.55;
      } else if (hallType === 'ultra luxury') {
        totalRevenue = ticketsCount * 13.95;
      }
      break;
  }

  console.log(`${movieName} -> ${totalRevenue.toFixed(2)} lv.`);
}

solveCurTask(["Green Book", "normal", "63"]);