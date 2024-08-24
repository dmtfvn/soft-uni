function solveCurTask(input) {
  let maxBadGrades = Number(input[0]);

  let i = 1;
  let task = input[i];
  let grade = Number(input[i + 1]);

  let goodGradesCount = 0;
  let badGradesCount = 0;
  let totalGradesCount = 0;
  let finalTask = '';

  while (badGradesCount < maxBadGrades) {
    let gradesCount = goodGradesCount + badGradesCount;
    let avgGrade = totalGradesCount / gradesCount;

    if (task === 'Enough') {
      console.log(`Average score: ${avgGrade.toFixed(2)}`);
      console.log(`Number of problems: ${gradesCount}`);
      console.log(`Last problem: ${finalTask}`);
      break;
    }

    if (grade > 4) {
      goodGradesCount++;

      finalTask = task;
      i++;
    } else if (grade <= 4) {
      badGradesCount++;

      finalTask = task;
      i++;
    }

    totalGradesCount += grade;

    i++;
    task = input[i];
    grade = Number(input[i + 1]);
  }

  if (badGradesCount >= maxBadGrades) {
    console.log(`You need a break, ${badGradesCount} poor grades.`);
  }
}

solveCurTask(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);