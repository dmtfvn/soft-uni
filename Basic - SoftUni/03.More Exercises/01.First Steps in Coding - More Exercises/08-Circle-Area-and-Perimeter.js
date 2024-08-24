function solveCurTask(input) {
  let radius = Number(input[0]);
  let pi = Math.PI;

  let circleArea = pi * Math.pow(radius, 2);
  let circlePerimeter = pi * 2 * radius;

  console.log(circleArea.toFixed(2));
  console.log(circlePerimeter.toFixed(2));
}

solveCurTask(["4.5"]);