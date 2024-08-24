function solveCurTask(arr) {
  const cities = Number(arr.shift());

  let cityCount = 1;

  let totalProfit = 0;

  for (let i = 0; i < cities * 3; i += 3) {
    const city = arr[i];

    let income = Number(arr[i + 1]);
    let expenses = Number(arr[i + 2]);

    let cityProfit = 0;

    if (cityCount % 5 === 0) {
      income *= 0.9;
    } else if (cityCount % 3 === 0) {
      expenses += expenses * 0.5;
    }

    cityProfit = income - expenses;

    console.log(`In ${city} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);

    totalProfit += cityProfit;

    cityCount++;
  }

  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

solveCurTask(['25',
  'c1',
  '1200',
  '500',
  'c2',
  '1200',
  '500',
  'c3',
  '1200',
  '500',
  'c4',
  '1200',
  '500',
  'c5',
  '1200',
  '500',
  'c6',
  '1200',
  '500',
  'c7',
  '1200',
  '500',
  'c8',
  '1200',
  '500',
  'c9',
  '1200',
  '500',
  'c10',
  '1200',
  '500',
  'c11',
  '1200',
  '500',
  'c12',
  '1200',
  '500',
  'c13',
  '1200',
  '500',
  'c14',
  '1200',
  '500',
  'c15',
  '1200',
  '500',
  'c16',
  '1200',
  '500',
  'c17',
  '1200',
  '500',
  'c18',
  '1200',
  '500',
  'c19',
  '1200',
  '500',
  'c20',
  '1200',
  '500',
  'c21',
  '1200',
  '500',
  'c22',
  '1200',
  '500',
  'c23',
  '1200',
  '500',
  'c24',
  '1200',
  '500',
  'c25',
  '1200',
  '500'
]);