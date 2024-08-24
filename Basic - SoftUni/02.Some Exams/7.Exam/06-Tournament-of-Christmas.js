function solveCurTask(input) {
  let days = Number(input[0]);

  let dailyWin = 0;
  let dailyLoss = 0;
  let totalMoney = 0;

  let i = 1;
  let command = input[i];

  for (let currDay = 1; currDay <= days; currDay++) {
    let currDayWins = 0;
    let currDayLosses = 0;

    while (command !== 'Finish') {
      let result = input[i + 1];

      if (result === 'win') {
        currDayWins++;
      } else if (result === 'lose') {
        currDayLosses++;
      }

      i += 2;
      command = input[i];
    }

    let dailyMoney = currDayWins * 20;

    if (currDayWins > currDayLosses) {
      dailyMoney *= 1.10;
      dailyWin++;
    } else if (currDayWins < currDayLosses) {
      dailyLoss++;
    }

    totalMoney += dailyMoney;

    i++;
    command = input[i];
  }

  if (dailyWin > dailyLoss) {
    totalMoney *= 1.20;
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }
}

solveCurTask(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);