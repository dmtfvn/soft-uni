function solveCurTask(input) {
  let name = input[0];
  let projects = input[1];
  let totalProjects = projects * 3;

  console.log(`The architect ${name} will need ${totalProjects} hours to complete ${projects} project/s.`);
}

solveCurTask(["George ", "4 "]);