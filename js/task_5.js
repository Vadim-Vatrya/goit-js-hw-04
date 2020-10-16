// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

function getAllPropValues(array, prop) {
  "use strict";
  // console.log("Товар", array);
  const arrayOfValues = [];

  for (const obj of array) {
    // console.log(obj);

    if (prop in obj) {
      // console.log(`Свойство c ключом ${prop} есть. Значение найдено`);
      arrayOfValues.push(obj[prop]);
    } else {
      // console.log(`Свойство с ключом ${prop} не найдено.`);
    }
    // Write code under this line
  }
  return arrayOfValues;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  [];
