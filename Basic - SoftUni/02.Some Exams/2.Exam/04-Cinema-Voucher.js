function solveCurTask(input) {
  let voucher = Number(input[0]);

  let i = 1;
  let current = input[i];

  let price1 = 0;
  let price2 = 0;

  let tickets = 0;
  let others = 0;

  while (current !== 'End') {
    let item = current;

    if (item.length > 8) {
      price1 = item.charCodeAt(0) + item.charCodeAt(1);

      if (voucher < price1) {
        break;
      }

      voucher -= price1;
      tickets++;
    } else if (item.length <= 8) {
      price2 = item.charCodeAt(0);

      if (voucher < price2) {
        break;
      }

      voucher -= price2;
      others++;
    }

    i++;
    current = input[i];
  }

  console.log(tickets);
  console.log(others);
}

solveCurTask(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);