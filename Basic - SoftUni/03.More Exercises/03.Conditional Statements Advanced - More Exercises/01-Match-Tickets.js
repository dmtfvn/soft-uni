function solveCurTask(input) {
  let budget = Number(input[0]);
  let ticketType = input[1];
  let groupCount = Number(input[2]);

  let normalTicket = 249.99;
  let vipTicket = 499.99;

  let totalNormalTicket = normalTicket * groupCount;
  let totalVipTicket = vipTicket * groupCount;

  if (groupCount >= 1 && groupCount <= 4) {
    budget *= 0.25;

    switch (ticketType) {
      case 'Normal':
        if (totalNormalTicket < budget) {
          console.log(`Yes! You have ${(budget - totalNormalTicket).toFixed(2)} leva left.`);
        } else if (totalNormalTicket > budget) {
          console.log(`Not enough money! You need ${(totalNormalTicket - budget).toFixed(2)} leva.`);
        }
        break;
      case 'VIP':
        if (totalVipTicket < budget) {
          console.log(`Yes! You have ${(budget - totalVipTicket).toFixed(2)} leva left.`);
        } else if (totalVipTicket > budget) {
          console.log(`Not enough money! You need ${(totalVipTicket - budget).toFixed(2)} leva.`);
        }
        break;
    }
  } else if (groupCount >= 5 && groupCount <= 9) {
    budget *= 0.40;

    switch (ticketType) {
      case 'Normal':
        if (totalNormalTicket < budget) {
          console.log(`Yes! You have ${(budget - totalNormalTicket).toFixed(2)} leva left.`);
        } else if (totalNormalTicket > budget) {
          console.log(`Not enough money! You need ${(totalNormalTicket - budget).toFixed(2)} leva.`);
        }
        break;
      case 'VIP':
        if (totalVipTicket < budget) {
          console.log(`Yes! You have ${(budget - totalVipTicket).toFixed(2)} leva left.`);
        } else if (totalVipTicket > budget) {
          console.log(`Not enough money! You need ${(totalVipTicket - budget).toFixed(2)} leva.`);
        }
        break;
    }
  } else if (groupCount >= 10 && groupCount <= 24) {
    budget *= 0.50;

    switch (ticketType) {
      case 'Normal':
        if (totalNormalTicket < budget) {
          console.log(`Yes! You have ${(budget - totalNormalTicket).toFixed(2)} leva left.`);
        } else if (totalNormalTicket > budget) {
          console.log(`Not enough money! You need ${(totalNormalTicket - budget).toFixed(2)} leva.`);
        }
        break;
      case 'VIP':
        if (totalVipTicket < budget) {
          console.log(`Yes! You have ${(budget - totalVipTicket).toFixed(2)} leva left.`);
        } else if (totalVipTicket > budget) {
          console.log(`Not enough money! You need ${(totalVipTicket - budget).toFixed(2)} leva.`);
        }
        break;
    }
  } else if (groupCount >= 25 && groupCount <= 49) {
    budget *= 0.60;

    switch (ticketType) {
      case 'Normal':
        if (totalNormalTicket < budget) {
          console.log(`Yes! You have ${(budget - totalNormalTicket).toFixed(2)} leva left.`);
        } else if (totalNormalTicket > budget) {
          console.log(`Not enough money! You need ${(totalNormalTicket - budget).toFixed(2)} leva.`);
        }
        break;
      case 'VIP':
        if (totalVipTicket < budget) {
          console.log(`Yes! You have ${(budget - totalVipTicket).toFixed(2)} leva left.`);
        } else if (totalVipTicket > budget) {
          console.log(`Not enough money! You need ${(totalVipTicket - budget).toFixed(2)} leva.`);
        }
        break;
    }
  } else if (groupCount >= 50) {
    budget *= 0.75;

    switch (ticketType) {
      case 'Normal':
        if (totalNormalTicket < budget) {
          console.log(`Yes! You have ${(budget - totalNormalTicket).toFixed(2)} leva left.`);
        } else if (totalNormalTicket > budget) {
          console.log(`Not enough money! You need ${(totalNormalTicket - budget).toFixed(2)} leva.`);
        }
        break;
      case 'VIP':
        if (totalVipTicket < budget) {
          console.log(`Yes! You have ${(budget - totalVipTicket).toFixed(2)} leva left.`);
        } else if (totalVipTicket > budget) {
          console.log(`Not enough money! You need ${(totalVipTicket - budget).toFixed(2)} leva.`);
        }
        break;
    }
  }
}

solveCurTask(["30000", "VIP", "49"]);