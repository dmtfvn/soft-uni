function solveCurTask(input) {
  let soldGamesCount = Number(input[0]);

  let hS = 0;
  let fN = 0;
  let oW = 0;
  let others = 0;

  for (let i = 1; i <= soldGamesCount; i++) {
    let game = input[i];

    if (game === 'Hearthstone') {
      hS++;
    } else if (game === 'Fornite') {
      fN++;
    } else if (game === 'Overwatch') {
      oW++;
    } else {
      others++;
    }
  }

  let hsPercent = hS / soldGamesCount * 100;
  let fnPercent = fN / soldGamesCount * 100;
  let owPercent = oW / soldGamesCount * 100;
  let othersPercent = others / soldGamesCount * 100;

  console.log(`Hearthstone - ${hsPercent.toFixed(2)}%`);
  console.log(`Fornite - ${fnPercent.toFixed(2)}%`);
  console.log(`Overwatch - ${owPercent.toFixed(2)}%`);
  console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

solveCurTask(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);