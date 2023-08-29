// Converting JSON to JavaScript Object
const jsonData = '{"name" : "Vishal", "age" : 25}';
const obj = JSON.parse(jsonData);
console.log(obj);

// Converting JavaScript Object to JSON
const jsonData1 = {"name" : "John", "age" : 22};
const obj1 = JSON.stringify(jsonData);
console.log(obj1);
