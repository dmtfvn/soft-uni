function solveCurTask(input) {
  let sweetBreadCount = Number(input[0]);

  let maxSugar = Number.MIN_SAFE_INTEGER;
  let maxFlour = Number.MIN_SAFE_INTEGER;

  let sugarQuantity = 0;
  let flourQuantity = 0;

  let sugarPack = 950;
  let flourPack = 750;

  for (let i = 1; i <= sweetBreadCount * 2; i += 2) {
    let sugar = Number(input[i]);
    let flour = Number(input[i + 1]);

    sugarQuantity += sugar;

    if (maxSugar < sugar) {
      maxSugar = sugar;
    }

    flourQuantity += flour;

    if (maxFlour < flour) {
      maxFlour = flour;
    }
  }

  let totalSugar = sugarQuantity / sugarPack;
  let totalFlour = flourQuantity / flourPack;

  console.log(`Sugar: ${Math.ceil(totalSugar)}`);
  console.log(`Flour: ${Math.ceil(totalFlour)}`);
  console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

solveCurTask(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);