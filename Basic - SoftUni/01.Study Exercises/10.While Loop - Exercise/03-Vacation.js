function solveCurTask(input) {
  let neededMoney = Number(input[0]);
  let availableMoney = Number(input[1]);

  let i = 2;
  let moneyManage = input[i];

  let spendDayCount = 0;
  let totalDays = 0;

  while (availableMoney < neededMoney) {
    totalDays++;

    if (moneyManage === 'spend') {
      spendDayCount++;

      if (spendDayCount === 5) {
        console.log("You can't save the money.");
        console.log(totalDays);
        break;
      }

      i++;

      let spendedMoney = Number(input[i]);
      availableMoney -= spendedMoney;

      if (availableMoney < 0) {
        availableMoney = 0;
      }
    } else if (moneyManage === 'save') {
      i++;

      let savedMoney = Number(input[i]);
      availableMoney += savedMoney;

      spendDayCount = 0;
    }

    i++;
    moneyManage = input[i];
  }

  if (availableMoney >= neededMoney) {
    console.log(`You saved the money for ${totalDays} days.`);
  }
}

solveCurTask(["2000", "1000", "spend", "1200", "save", "2000"]);