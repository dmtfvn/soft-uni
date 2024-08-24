function solveCurTask(input) {
  let num1 = input[0];
  let num2 = input[1];

  let start1 = Number(num1[0]);
  let start2 = Number(num1[1]);
  let start3 = Number(num1[2]);
  let start4 = Number(num1[3]);

  let end1 = Number(num2[0]);
  let end2 = Number(num2[1]);
  let end3 = Number(num2[2]);
  let end4 = Number(num2[3]);

  let barcode = '';

  for (let i = start1; i <= end1; i++) {
    for (let j = start2; j <= end2; j++) {
      for (let k = start3; k <= end3; k++) {
        for (let l = start4; l <= end4; l++) {
          if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0 && l % 2 != 0) {
            barcode += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }

  console.log(barcode);
}

solveCurTask(["2345", "6789"]);