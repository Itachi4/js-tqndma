/* 1. find the most frequently occurring number  */
const findHighestFreq = (arr) => {
  const freqMap = {};
  let maxNum = 0;
  let maxFreq = arr[0];
  for (let num of arr) {
    if (freqMap[num]) {
      freqMap[num] += 1;
    } else {
      freqMap[num] = 1;
    }
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      maxNum = num;
    }
  }
  return maxNum;
};
/* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
const getDiffBetweenDigonal = (matrix) => {
  let diag1 = 0;
  let diag2 = 0;
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    diag1 += matrix[i][i];
    diag2 += matrix[i][len - 1 - i];
  }
  return Math.abs(diag1 - diag2);
};
// /* test */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

/* 3. Count the number of 3 as digit in all numbers from 0 to 50. */
const find3 = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    let num = i.toString();
    for (let x of num) {
      if (x == '3') count++;
    }
  }
  return count;
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {
  let words = str.split(' ');
  let capt = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return capt.join(' ');
};
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
const capEachCharInStr = (str) => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str.split('');
    ch[i] = ch[i].toUpperCase();
    res[i] = ch.join('');
  }
  return res;
};
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
const isValid = (str) => {
  let len;
  do {
    len = str.length;
    str = str.replace(/\(\)|\[\]|\{\}/g, '');
  } while (str.length != len);
  return str.length === 0;
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
const fibonacci = (num) => {
  let num1 = 0;
  let num2 = 1;
  let temp;
  for (let i = 2; i < num; i++) {
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }
  return num2;
  // for loop
};
// const fibonacci = (num) => {
//   // recursion
// return fibonacci(num-1)+fibonacci(num-2)
// }
/* test */
console.log('fibonacci: ', fibonacci(4));

/* 8. looking for most close 3 numbers to the target */
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {
  const diff = givenArr.map((num) => {
    return { num, diff: Math.abs(num - givenNum) };
  });

  diff.sort((a, b) => a.diff - b.diff);
  res = [];
  for (let i = 0; i < find; i++) {
    res.push(diff[i].num);
  }

  return res;
}
console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
function createRandomStr(N, K) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let chars = new Set();
  if (K > characters.length) {
    K = characters.length;
  }
  while (chars.size < K) {
    const random = Math.floor(Math.random() * characters.length);
    chars.add(characters[random]);
  }

  const result = Array.from(chars);
  let res = '';
  for (let i = 0; i < N; i++) {
    res += result[Math.floor(Math.random() * K)];
  }
  return res;
}

// Example usage
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca

/* 10. sort the array by the given sequence */
function sortBySeq(arr, sqs) {
  const rank = {};

  for (let i = 0; i < sqs.length; i++) {
    rank[sqs[i]] = i;
  }
  arr.sort((a, b) => rank[a] - rank[b]);

  return arr;
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs)); // ["e", "o", "h", "l", "l"];
