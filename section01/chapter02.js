// // 단락평가 ( 첫 번째 피연산자의 값만으로 값이 결정되면 나머지 연산자엔 접근도 안함)
// function returnFalse() {
//   console.log("False 함수");
//   return undefined; //Falsy
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10; //Truthy
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());

// 언제 유용하게 쓸까? 활용사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
// person이 애초에 값이없으면 undefined라  뒷까지도 가지않음 !!
