function solveCurTask(input) {
  let nylonAmount = Number(input[0]);
  let paintAmount = Number(input[1]);
  let thinnerAmount = Number(input[2]);
  let workingHours = Number(input[3]);

  let nylonPrice = (nylonAmount + 2) * 1.50;
  let paintPrice = (paintAmount + (paintAmount * 10 / 100)) * 14.50;
  let thinnerPrice = thinnerAmount * 5;
  let garbageBags = 0.40;

  let materialsTotalSum = nylonPrice + paintPrice + thinnerPrice + garbageBags;
  let paidPerHour = materialsTotalSum * 30 / 100;
  let workersPaid = paidPerHour * workingHours;
  let totalSum = materialsTotalSum + workersPaid;

  console.log(totalSum);
}

solveCurTask(["10", "11", "4", "8"]);