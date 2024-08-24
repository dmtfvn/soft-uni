function solveCurTask(input) {
  let i = 0;
  let row = Number(input[i]);
  i++;

  let totalLuggageVolume = row;
  let luggageCount = 0;

  while (row !== 'End') {
    let caseVolume = Number(input[i]);

    if (i % 3 === 0) {
      caseVolume *= 1.10;
    }

    if (totalLuggageVolume < caseVolume) {
      break;
    }

    totalLuggageVolume -= caseVolume;
    luggageCount++;

    i++;
    row = input[i];
  }

  if (row === 'End') {
    console.log('Congratulations! All suitcases are loaded!');
    console.log(`Statistic: ${luggageCount} suitcases loaded.`);
  } else {
    console.log('No more space!');
    console.log(`Statistic: ${luggageCount} suitcases loaded.`);
  }
}

solveCurTask(["1200.2", "260", "380.5", "125.6", "305", "End"]);