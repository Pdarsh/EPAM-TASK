function add(numbers){
    return `Sum of entered number is = ${numbers.reduce((a,b) => a+b)}`;
}

function multiply(numbers){
    return `Product of entered number is = ${numbers.reduce((a,b) => a*b)}`;
}

function subtract(numbers){
    if(numbers.length > 2) return `Try Entering only two numbers yet the diffrence of between 1st two entered number = ${numbers[0] - numbers[1]}`
    return `Difference between entered number is = ${numbers[0] - numbers[1]} `
}

function divide(numbers){
    if(numbers[1] === 0) return `Cannot divide any number by Zero`
    if(numbers.length > 2) return `Try Entering only two numbers yet the quotient of 1st number divided by 2nd number = ${numbers[0] / numbers[1]}`
    return `Quotient of entered dividend and divisor is = ${numbers[0] / numbers[1]}`
}

export {add,multiply,subtract,divide}