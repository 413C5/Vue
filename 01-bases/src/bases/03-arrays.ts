export const numberArray = [1, 2, 3, 4, 5]


const numberArray2: (number | string)[] = structuredClone(numberArray)




numberArray.push(6)
numberArray2.push('7')


console.log(numberArray)

console.log(numberArray2)


export {}