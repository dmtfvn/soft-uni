function solveCurTask(input) {
  let visitors = Number(input[0]);

  let visBack = 0;
  let visChest = 0;
  let visLegs = 0;
  let visAbs = 0;

  let visProteinShake = 0;
  let visProteinBar = 0;

  let visTraining = 0;
  let visOther = 0;

  for (let i = 1; i <= visitors; i++) {
    let current = input[i];

    switch (current) {
      case 'Back':
        visBack++;
        visTraining++;
        break;
      case 'Chest':
        visChest++;
        visTraining++;
        break;
      case 'Legs':
        visLegs++;
        visTraining++;
        break;
      case 'Abs':
        visAbs++;
        visTraining++;
        break;
      case 'Protein shake':
        visProteinShake++;
        visOther++;
        break;
      case 'Protein bar':
        visProteinBar++;
        visOther++;
        break;
    }
  }

  let percentVisTraining = visTraining / visitors * 100;
  let percentVisOther = visOther / visitors * 100;

  console.log(`${visBack} - back`);
  console.log(`${visChest} - chest`);
  console.log(`${visLegs} - legs`);
  console.log(`${visAbs} - abs`);
  console.log(`${visProteinShake} - protein shake`);
  console.log(`${visProteinBar} - protein bar`);
  console.log(`${percentVisTraining.toFixed(2)}% - work out`);
  console.log(`${percentVisOther.toFixed(2)}% - protein`);
}

solveCurTask(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);