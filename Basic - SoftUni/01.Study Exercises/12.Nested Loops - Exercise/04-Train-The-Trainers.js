function solveCurTask(input) {
  let judges = Number(input[0]);

  let i = 1;
  let current = input[i];

  let sumGrades = 0;
  let gradeCounter = 0;

  while (current !== 'Finish') {
    let name = current;
    let tempSumGrades = 0;

    for (let j = 1; j <= judges; j++) {
      gradeCounter++;
      i++;

      let grade = Number(input[i]);
      tempSumGrades += grade;
    }

    let tempAvgGrade = tempSumGrades / judges;
    sumGrades += tempSumGrades;

    console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

    i++;
    current = input[i];
  }

  let avgGrades = sumGrades / gradeCounter;

  console.log(`Student's final assessment is ${avgGrades.toFixed(2)}.`);
}

solveCurTask(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);