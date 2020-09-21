const findBestEmployee = function (employees) {
  "use strict";
  employees = Object.entries(employees);
  let value = 0;
  let name = "";
  for (const employee of employees) {
    // console.log(employee);
    if (value < employee[1]) {
      value = employee[1];
      name = employee[0];
    }
  }

  return name;
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
// 'lux'
