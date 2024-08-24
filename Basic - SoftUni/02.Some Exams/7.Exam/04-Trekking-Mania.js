function solveCurTask(input) {
  let groupCount = Number(input[0]);

  let musalla = 0;
  let montBlanc = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;

  let totalGroupCount = 0;

  for (let i = 1; i <= groupCount; i++) {
    let curNum = Number(input[i]);

    if (curNum <= 5) {
      musalla += curNum;
    } else if (curNum <= 12) {
      montBlanc += curNum;
    } else if (curNum <= 25) {
      kilimandjaro += curNum;
    } else if (curNum <= 40) {
      k2 += curNum;
    } else if (curNum > 40) {
      everest += curNum;
    }

    totalGroupCount += curNum;
  }

  let musallaPercent = musalla / totalGroupCount * 100;
  console.log(`${musallaPercent.toFixed(2)}%`);

  let montBlancPercent = montBlanc / totalGroupCount * 100;
  console.log(`${montBlancPercent.toFixed(2)}%`);

  let kilimandjaroPercent = kilimandjaro / totalGroupCount * 100;
  console.log(`${kilimandjaroPercent.toFixed(2)}%`);

  let k2Percent = k2 / totalGroupCount * 100;
  console.log(`${k2Percent.toFixed(2)}%`);

  let everestPercent = everest / totalGroupCount * 100;
  console.log(`${everestPercent.toFixed(2)}%`);
}

solveCurTask(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);