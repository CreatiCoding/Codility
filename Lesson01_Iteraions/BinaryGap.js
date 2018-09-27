// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function d2b(dec) {
  let result = "";
  while (dec != 0) {
    if (dec % 2 == 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
    dec = parseInt(dec / 2);
  }
  return result;
}

function reverse(s) {
  return s
    .split("")
    .reverse()
    .join("");
}
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = d2b(N).split("");

  let result = [];
  for (let i in arr) {
    if (i == 0) continue;

    if (arr[i - 1] == "0" && arr[i] == "1") {
      continue;
    } else if (arr[i - 1] == "0" && arr[i] == "0") {
      result[result.length - 1]++;
    } else if (arr[i - 1] == "1" && arr[i] == "0") {
      result[result.length] = 1;
    } else if (arr[i - 1] == "1" && arr[i] == "1") {
      continue;
    }
  }
  if (arr[arr.length - 1] == "0") {
    result.splice(result.length - 1, 1);
  }
  result.sort((a, b) => b - a);
  return result[0] == undefined ? 0 : result[0];
}

function test() {
  for (let i = 0; i < 50; i++) solution(i);
}
