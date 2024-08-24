function solveCurTask(input) {
  let i = 0;
  let row = input[i];

  let targetSteps = 10000;
  let stepsSum = 0;

  while (row !== 'Going home') {
    let steps = Number(row);
    stepsSum += steps;

    if (stepsSum >= targetSteps) {
      console.log('Goal reached! Good job!');
      console.log(`${stepsSum - targetSteps} steps over the goal!`);
      break;
    }

    i++;
    row = input[i];
  }

  if (row === 'Going home') {
    let stepsToHome = Number(input[i + 1]);
    stepsSum += stepsToHome;

    if (stepsSum >= targetSteps) {
      console.log('Goal reached! Good job!');
      console.log(`${stepsSum - targetSteps} steps over the goal!`);
    } else {
      console.log(`${targetSteps - stepsSum} more steps to reach goal.`);
    }
  }
}

solveCurTask(["1500", "300", "2500", "3000", "Going home", "200"]);