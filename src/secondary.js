const metals = [
  { metal: "Sterling Silver", price: 12.42 },
  { metal: "14K Gold", price: 736.4 },
  { metal: "24K Gold", price: 1258.9 },
  { metal: "Platinum", price: 795.45 },
  { metal: "Palladium", price: 1241.0 }
];

const diamonds = [
  { carets: 0.5, price: 405 },
  { carets: 0.75, price: 782 },
  { carets: 1, price: 1470 },
  { carets: 1.5, price: 1997 },
  { carets: 2, price: 3638 }
];

const ringStyles = [
  { style: "Classic", price: 500 },
  { style: "Modern", price: 710 },
  { style: "Vintage", price: 965 }
];

function orderMkr(metals, diamonds, ringStyles) {
  let order = {
    style: null,
    carets: null,
    metal: null,
    price: null
  };
}

// function runIterator(subArr) {
// let arrsArr = [metals, diamonds, ringStyles]
// for (let i = 0; i < arrsArr.length; i++) {
//     for (let j = 0; j < subArr.length; i++) {
//         if (subArr[i].style === 
//     }
// }

let optionsArr = []
document.querySelector("#metalsBtn").addEventListener("click", () => {
    let metalChoice = document.querySelector("#metals").value
    order.metal = metalChoice
    for (let i = 0; i < metals.length; i++) {
        if (metals[i].metal = choice) {
            optionsArr.push(metals[i].price)
        }
    }
    return optionsArr
})

console.log(optionsArr)