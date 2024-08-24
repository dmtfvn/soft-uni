function solveCurTask(input) {
  let period = Number(input[0]);

  let doctorsPerDay = 7;

  let treated = 0;
  let untreated = 0;

  for (let i = 1; i <= period; i++) {
    let patientsPerDay = Number(input[i]);

    if (i % 3 === 0 && untreated > treated) {
      doctorsPerDay += 1;
    }

    if (patientsPerDay < doctorsPerDay) {
      treated += patientsPerDay;
    } else {
      treated += doctorsPerDay;
      untreated += patientsPerDay - doctorsPerDay;
    }
  }

  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}

solveCurTask(["4", "7", "27", "9", "1"]);