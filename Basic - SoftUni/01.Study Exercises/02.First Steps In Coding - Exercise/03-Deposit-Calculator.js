function solveCurTask(input) {
  let depositSum = Number(input[0]);
  let depositFinalDate = Number(input[1]);
  let annualInterestRate = Number(input[2]);

  let interestRate = depositSum * annualInterestRate / 100;
  let monthlyInterestRate = interestRate / 12;
  let finalSum = depositSum + depositFinalDate * monthlyInterestRate;

  console.log(finalSum);
}

solveCurTask(["200", "3", "5.7"]);