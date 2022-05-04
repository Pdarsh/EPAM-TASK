import readline from 'readline-sync'
import {add,multiply,subtract,divide} from './operations.js'


function operation(optype, numbers) {
  if (numbers.length < 1) return `Enter atleast two valid parameters`;
  switch (optype) {
    case "1":
        return add(numbers)
    case "2":
        return subtract(numbers)
    case "3":
        return multiply(numbers)
    case "4":
        return divide(numbers)
  }
}

while (true) {
  console.log("ENTER YOUR CHOICE\n----------------Calculator----------------");
  console.log("1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n5.Exit");
  console.log("----------------Calculator----------------");
  console.log("Select Operation by Entering the number\n");
  let choice = readline.question();
  if(choice === '5') break
  else if(choice > 5) {
      console.log("INVALID OPTION SELECTED TRY SELECTING FROM THE GIVEN NUMBERS") 
      continue
  }
  console.log("Enter numbers with the help of space\n");
  let numbers = readline.question().split(" ").map(Number).filter(Number.isFinite);
  let ans = operation(choice, numbers)
  console.log(ans)
}
