function solveCurTask(input) {
  let type = input[0];
  let result = 0;

  if (type === 'square') {
    let a = Number(input[1]);
    result = a * a;

  } else if (type === 'rectangle') {
    let a = Number(input[1]);
    let b = Number(input[2]);
    result = a * b;

  } else if (type === 'circle') {
    let r = Number(input[1]);
    result = Math.PI * Math.pow(r, 2);

  } else {
    let a = Number(input[1]);
    let ha = Number(input[2]);
    result = a * ha / 2;
  }

  console.log(result.toFixed(3));
}

solveCurTask(["triangle", "4.5", "20"]);