let sumOfTwoNum: number
function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}
sumOfTwoNum = addTwo(10, 10);
console.log("sum of two number is " + sumOfTwoNum)

// ---------------------------------------------------------------

let upperCaseName: string
function getUpperCase(value: string): string {
  return value.toUpperCase();
}
upperCaseName = getUpperCase("Aamir khan");
console.log("name converted int upper case " + upperCaseName)

// ---------------------------------------------------------------

const getHello = (val: string): string => {
  return `hello ${val}`
}
console.log(getHello("Aamir"))

// ---------------------------------------------------------------

const myName: string[] = ["Aamir", "Aasim", "Aaquib"]
myName.map((item): string => {
  return `names is ${item}`
})

// ---------------------------------------------------------------

function consolePrint(value: string): void {
  console.log(value);

}

// ---------------------------------------------------------------

function handleError(error: string): never {
  throw new Error(error)
}
