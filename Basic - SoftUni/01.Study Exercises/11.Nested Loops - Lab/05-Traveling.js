function solveCurTask(input) {
  let i = 0;
  let command = input[i];
  i++;

  while (command !== 'End') {
    let destination = command;
    let budget = Number(input[i]);
    i++;

    let sum = 0;

    while (sum < budget) {
      let money = Number(input[i]);
      i++;

      sum += money;
    }

    console.log(`Going to ${destination}!`);

    command = input[i];
    i++;
  }
}

solveCurTask(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);