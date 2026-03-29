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
let { name, age, hobby, extra = "hhello" } = person;

// 객체의 구조 분해할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // 함수에 매개변수로 객체를 넘겼기 때문에 가능
