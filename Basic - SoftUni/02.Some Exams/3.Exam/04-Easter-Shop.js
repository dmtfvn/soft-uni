function solveCurTask(input) {
  let totalEggs = Number(input[0]);

  let i = 1;
  let current = input[i];

  let soldEggs = 0;

  while (current !== 'Close') {
    let todo = input[i];
    let count = Number(input[i + 1]);
    
    if (todo === 'Buy') {
      soldEggs += count;

      if (totalEggs < count) {
        console.log('Not enough eggs in store!');
        console.log(`You can buy only ${totalEggs}.`);
        break;
      }

      totalEggs -= count;
      i++;
    } else if (todo === 'Fill') {
      totalEggs += count;
      i++;
    }

    i++;
    current = input[i];
  }

  if (current === 'Close') {
    console.log('Store is closed!');
    console.log(`${soldEggs} eggs sold.`);
  }
}

solveCurTask(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);