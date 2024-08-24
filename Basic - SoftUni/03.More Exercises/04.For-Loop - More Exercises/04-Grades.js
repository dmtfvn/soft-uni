function solveCurTask(input) {
  let studensCount = Number(input[0]);

  let gradeA = 0;
  let gradeB = 0;
  let gradeC = 0;
  let gradeF = 0;

  let gradeCount = 0;

  for (let i = 1; i <= studensCount; i++) {
    let grade = Number(input[i]);

    if (grade >= 2 && grade < 3) {
      gradeF += 1;
      gradeCount += grade;
    } else if (grade >= 3 && grade < 4) {
      gradeC += 1;
      gradeCount += grade;
    } else if (grade >= 4 && grade < 5) {
      gradeB += 1;
      gradeCount += grade;
    } else if (grade >= 5) {
      gradeA += 1;
      gradeCount += grade;
    }
  }

  let percentA = gradeA / studensCount * 100;
  let percentB = gradeB / studensCount * 100;
  let percentC = gradeC / studensCount * 100;
  let percentF = gradeF / studensCount * 100;
  let avgGrade = gradeCount / studensCount;

  console.log(`Top students: ${percentA.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentB.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentC.toFixed(2)}%`);
  console.log(`Fail: ${percentF.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}

solveCurTask(["6", "2", "3", "4", "5", "6", "2.2"]);