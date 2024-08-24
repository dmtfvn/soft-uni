function solveCurTask(input) {
  let index = 0;
  let name = input[index];
  index++;

  let classes = 1;
  let sumGrades = 0;
  let badGrades = 0;

  let isExcluded = false;

  while (classes <= 12) {
    let grade = Number(input[index]);
    index++;

    if (grade < 4.00) {
      badGrades++;

      if (badGrades === 2) {
        isExcluded = true;
        break;
      }

      continue;
    }

    sumGrades += grade;
    classes++;
  }

  if (!isExcluded) {
    let avgGrade = sumGrades / 12;

    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${classes} grade`);
  }
}

solveCurTask(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);