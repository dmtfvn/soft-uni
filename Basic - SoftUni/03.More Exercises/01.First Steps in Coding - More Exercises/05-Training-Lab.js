function solveCurTask(input) {
  let roomLength = Number(input[0]);
  let roomWidth = Number(input[1]);

  let deskLength = 120;
  let deskWidth = 70;

  let roomLengthCen = roomLength * 100;
  let hallwayWidthCen = 100;
  let roomWidthCen = roomWidth * 100 - hallwayWidthCen;

  let deskCountPerWidth = roomWidthCen / deskWidth;
  let deskCountPerLength = roomLengthCen / deskLength;

  let totalDeskCount = Math.floor(deskCountPerWidth) * Math.floor(deskCountPerLength) - 3;

  console.log(totalDeskCount);
}

solveCurTask(["8.4", "5.2"]);