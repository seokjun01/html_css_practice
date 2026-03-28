// JS는 동기적으로 코드를 실행한다 (= 순서대로 실행한다)
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000); // 원하는 코드를 특정 시간 이후에 비동기적으로 실행가능한 내장함수

console.log(3);
