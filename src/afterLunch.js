let bckwrds = [1, 2, 3, 4, 5];

console.log(bckwrds.reverse());

let numArr = [2, 3, 5, 1, 6];
let numOrgs = numArr.sort();

let bigNums = [1, 6, 10, 234, 9, 3];
let whatIExpect = bigNums.sort((current, next) => {
  return current - next;
});

let smallNum = bigNums.find(num => num < 250);

let people = [
  {
    name: "fred",
    age: 90
  },
  {
    name: "fred",
    age: 89
  }
];

let myPerson = people.find(vari => vari.name === "fred");

let onlyFreds = people.filter(vari => vari.name === "fred");

let doubles = numArr.map(num => num * 2);

function speak(arr, func) {
  arr.forEach(item => {
    func();
  });
}
function pickAnimal(taco) {
  if (taco === 3) {
    return "true";
  } else {
    return "false";
  }
}
speak([1, 2, 3], );
