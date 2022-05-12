const square = function (x) {
    return x*x; 
}; 

console.log(square(8)); 

// const squArrow = (x) => {
//     return x*x
// }; 
const squArrow = (x) => x*x; 


console.log(squArrow(9)); 

const getFirstName = (name) => name.split(' ')[0];  




// challenge
const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}; 

console.log(multiplier.multiply()); 