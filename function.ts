let sumOfTwoNum: number
function addTwo(num1: number, num2: number): number{
  return num1 +  num2;
}
sumOfTwoNum = addTwo(10,10);
console.log("sum of two number is " + sumOfTwoNum)

// ---------------------------------------------------------------

let upperCaseName: string
function getUpperCase(value: string): string{
  return value.toUpperCase();
}
upperCaseName = getUpperCase("Aamir khan");
console.log("name converted int upper case " + upperCaseName)
