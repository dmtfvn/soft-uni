function solveCurTask(input) {
  let studentCount = Number(input[0]);

  let gradeA = 0;
  let gradeB = 0;
  let gradeC = 0;
  let gradeF = 0;
  let avgGrade = 0;

  for (let i = 1; i <= studentCount; i++) {
    let grade = Number(input[i]);

    if (grade >= 2.00 && grade <= 2.99) {
      gradeF++;
    } else if (grade >= 3.00 && grade <= 3.99) {
      gradeC++;
    } else if (grade >= 4.00 && grade <= 4.99) {
      gradeB++;
    } else if (grade >= 5) {
      gradeA++;
    }

    avgGrade += grade;
  }

  let percentGradeA = gradeA / studentCount * 100;
  let percentGradeB = gradeB / studentCount * 100;
  let percentGradeC = gradeC / studentCount * 100;
  let percentGradeF = gradeF / studentCount * 100;

  let percentAvgGrade = avgGrade / studentCount;

  console.log(`Top students: ${percentGradeA.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentGradeB.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentGradeC.toFixed(2)}%`);
  console.log(`Fail: ${percentGradeF.toFixed(2)}%`);
  console.log(`Average: ${percentAvgGrade.toFixed(2)}`);
}

solveCurTask(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);