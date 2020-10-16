const findBestEmployee = function (employees) {
  ("use strict");

  // Write code under this line
  const keys = Object.keys(employees);
  const values = Object.values(employees);

  let maxTasks = 0;
  let best = "";

  for (const key of keys) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      best = key;
    }
  }

  return best;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
