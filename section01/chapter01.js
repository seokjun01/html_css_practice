// 1. Falsy한 값
// 조건문에서 거짓으로 평가
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
//falsy한 값 뺴고 전부다

// 3. 활용 사례

function printName(person) {
  console.log(person.name);
}

let person = {
  name: "이정환",
};

printName(person);
