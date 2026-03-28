// 배열의 구조분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 객체의 구조분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};
//객체는 중괄호로 여닫음
let { name, age, hobby } = person;
console.log(name, age, hobby);
console.log(one, two, three);
