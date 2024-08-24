function solveCurTask(input) {
  let houseHeight = Number(input[0]);
  let houseLength = Number(input[1]);
  let ceilingHeight = Number(input[2]);

  let rectangleSide = houseHeight * houseLength;
  let window = 1.5 * 1.5;

  let twoRectangleSides = rectangleSide * 2;
  let twoWindows = window * 2;

  let areaRectangles = twoRectangleSides - twoWindows;

  let squareSide = Math.pow(houseHeight, 2);
  let door = 1.2 * 2;

  let twoSquareSides = squareSide * 2;
  let areaSquares = twoSquareSides - door;

  let totalAreaGreenPaint = areaRectangles + areaSquares;
  let greenPaint = totalAreaGreenPaint / 3.4;

  let twoCeilingRectangles = houseHeight * houseLength * 2;
  let triangle = houseHeight * ceilingHeight / 2;
  let twoTriangles = triangle * 2;

  let totalAreaRedPaint = twoCeilingRectangles + twoTriangles;
  let redPaint = totalAreaRedPaint / 4.3;

  console.log(greenPaint.toFixed(2));
  console.log(redPaint.toFixed(2));
}

solveCurTask(["10.25", "15.45", "8.88"]);