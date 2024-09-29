// Задание 1. Массив уникальных комбинаций
function arrayUniqueCombinations(array) {
    let uniqueComb = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] * array[j] % 2 == 0) {
                uniqueComb.push([array[i], array[j]]);
            }
        }
    }

    return uniqueComb;
}

const arr1 = [2, 3, 4, 5, 6];
let result1 = arrayUniqueCombinations(arr1);
// console.log(result1);
document.getElementById('result1').textContent = JSON.stringify(result1);


//----------------------------------------------------------------------

// Задание 2. Сдвиг массива
function shiftArray(array, shift) {
    const length = array.length;

    if (shift > 0) {
        shift = shift % length; // Сдвиг вправо
    } else {
        shift = length + (shift % length); // Сдвиг влево
    }

    // Сдвиг вправо
    for (let i = 0; i < shift; i++) {
        const right = array.pop();
        array.unshift(right);
    }

    return array;
}

const arr2 = [1, 2, 3, 4, 5];
let result2 = shiftArray(arr2, 2)
// console.log(result2);
document.getElementById('result2').textContent = JSON.stringify(result2);

let result3 = shiftArray(arr2, -1);
// console.log(result3);
document.getElementById('result3').textContent = JSON.stringify(result3);



//----------------------------------------------------------------------

// Задание 3.  Сортировка по длине вложенных массивов
function sortForLengthArr(array){
    array.sort((a, b) => a.length - b.length);
    return array;
}

const arr3 = [[1, 2], [3], [4, 5, 6], []];
let result4 = sortForLengthArr(arr3);
// console.log(result4);
document.getElementById('result4').textContent = JSON.stringify(result4);



//----------------------------------------------------------------------

// Задание 4.  Числовая спираль

function spiralOrder(matrix) {
    const result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result5 = spiralOrder(matrix);
// console.log(result5);
document.getElementById('result5').textContent = JSON.stringify(result5)



//----------------------------------------------------------------------

// Задание 5.  Объединение массивов с одинаковыми элементами

function twoArraysInOne(array1, array2) {
    const resArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !resArray.includes(array1[i])){
            resArray.push(array1[i]);
        }
    }

    return resArray;
}

const array1 = [1, 2, 2, 3, 4];
const array2 = [2, 3, 5];
let result6 = twoArraysInOne(array1, array2);
// console.log(result6);
document.getElementById('result6').textContent = JSON.stringify(result6);