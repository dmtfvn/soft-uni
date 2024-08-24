function solveCurTask(input) {
  let budget = Number(input[0]);

  let i = 1;
  let current = input[i];

  while (current !== 'ACTION') {
    let actorName = input[i];
    let actorSalary = Number(input[i + 1]);

    if (actorName.length > 15) {
      budget -= budget * 0.20;

      i++;
      current = input[i];
      continue;
    } else if (actorName.length <= 15) {
      budget -= actorSalary;

      i++;
    }

    if (budget < 0) {
      console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
      break;
    }

    i++;
    current = input[i];
  }

  if (budget >= 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  }
}

solveCurTask(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);