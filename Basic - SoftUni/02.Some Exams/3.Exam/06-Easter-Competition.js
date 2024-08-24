function solveCurTask(input) {
  let easterBread = Number(input[0]);

  let numOneName = '';
  let numOneGrade = 0;

  let i = 1;
  let current = input[i];

  for (let breadCount = 1; breadCount <= easterBread; breadCount++) {
    let name = input[i];
    let tempGrade = 0;

    i++;
    current = input[i];

    while (current !== 'Stop') {
      let grade = Number(current);

      tempGrade += grade;

      i++;
      current = input[i];
    }

    console.log(`${name} has ${tempGrade} points.`);

    if (numOneGrade < tempGrade) {
      numOneGrade = tempGrade;
      numOneName = name;

      console.log(`${name} is the new number 1!`);
    }

    i++;
  }

  console.log(`${numOneName} won competition with ${numOneGrade} points!`);
}

solveCurTask(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);