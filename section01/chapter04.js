// Spread 연산자
// 흩뿌리다. 펼치다
// 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// Rest 매개변수
// 나머지 , 나머지 매개변수
// rest 매개변수 뒤에는 새로 매개변수 선언 안됨 ( 개념 자체가 모순이 됨)
function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
