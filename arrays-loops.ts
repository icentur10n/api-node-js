const arrayNumbers = [1, 2, 3];
console.log(arrayNumbers);
console.log(arrayNumbers.length);

const arrayTwoStrings =['John Wick', 'Keanu'];
arrayTwoStrings.push('My favorite actor');
console.log(arrayTwoStrings);
console.log(arrayTwoStrings.length);

const arrayThreeStringsArray = ['Batman', 'Cristian', 'My favorite actor'];
arrayThreeStringsArray.pop();
console.log(arrayThreeStringsArray);
console.log(arrayThreeStringsArray.length);

const arrayEmptyNumbers: Array<number> = [];
arrayEmptyNumbers.push(1);
console.log(arrayEmptyNumbers.length);

arrayEmptyNumbers.push(2);
console.log(arrayEmptyNumbers.length);

const arrayFiveNumbers: Array<number> = [0, 1, 2, 3, 4];
for (let i = 0; i < arrayFiveNumbers.length; i++) {
    console.log(arrayFiveNumbers[i]);
}

const arrayFiveNumbersSum: Array<number> = [0, 1, 2, 3, 4];
let sumOfArray = 0;
for (let i = 0; i < arrayFiveNumbersSum.length; i++) {
    sumOfArray += arrayFiveNumbersSum[i];
}
console.log('sum of array:', sumOfArray);

const arrayThreeNumbers: Array<number> = [5, 6, 7];
const arrayNumbersMultipliedByTwo: Array<number> = [];

for (let i = 0; i < arrayThreeNumbers.length; i++) {
    arrayNumbersMultipliedByTwo.push(arrayThreeNumbers[i] * 2);
}
console.log(arrayNumbersMultipliedByTwo);

const arrayNumbersReverse: Array<number> = [5, 6, 7];
for (let i = arrayNumbersReverse.length - 1; i >= 0; i--) {
    console.log(arrayNumbersReverse[i]);
}

const arrayMaxNumber: Array<number> = [27, 26, 14, 13, 2];
let maxNumber: number = arrayMaxNumber[0];
for (let i = 1; i < arrayMaxNumber.length; i++) {
    if (arrayMaxNumber[i] > maxNumber) {
        maxNumber = arrayMaxNumber[i];
    }
}
console.log('The highest number in the array is', maxNumber);

const arrayMinNumber: Array<number> = [27, 26, 14, 13, 2];
let minNumber: number = arrayMinNumber[0];
for (let i = 1; i < arrayMinNumber.length; i++) {
    if (arrayMinNumber[i] > minNumber) {
        minNumber = arrayMinNumber[i];
    }
}
console.log('The lowest number in the array is', minNumber);

const arrayEvenNumbers: Array<number> = [0, 1, 2, 3, 4];
let evenNumbers: number = 0;
for (let i =  0; i < arrayEvenNumbers.length; i++) {
    if (arrayEvenNumbers[i] % 2 === 0) {
        evenNumbers++;
    }
}
console.log('The even numbers are', evenNumbers);

const arrayPositiveNumbers: Array<number> = [0, -1, 2,- 3, 4];
let  positiveNumbers: number[] = [];
for (let i = 0; i < arrayPositiveNumbers.length; i++) {
    if (arrayPositiveNumbers[i] > 0) {
        positiveNumbers.push(arrayPositiveNumbers[i]);
    }
}
console.log('The positive numbers of array are', positiveNumbers);