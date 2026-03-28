//6가지의 요소 조작 메서드
// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가 + 배열의 길이 반환

let arr1 = [1, 2, 3];

const newLength = arr1.push(4, 5, 6, 7);
//console.log(arr1);

// 2. pop 배열의 맨 뒤에 있는 요소 제거 + 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

// 3. Shift 배열의 맨 앞의 요소를 제거 + 반환

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift 배열의 맨 앞에 요소를 추가  + 배열의 길이 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// ==== shift, unshift는 맨앞의 요소를 변경하고 인덱스 재정렬이 있어 조금 느림 ===

// 5. slice
// 마치 가위처럼 배열의 범위를 잘라내어 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 5라고 적으면 4번 인덱스 까지 잘라냄 그래서 원하는 인덱스 +1을 해야함
let sliced2 = arr5.slice(2); // 어차피 끝까지 자를거면 시작인덱스만
let sliced3 = arr5.slice(-1); // 뒤에서 부터 자를거면 -로

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
