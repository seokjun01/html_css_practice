// Promise -> 비동기 작업을 효율적으로 도와주는 객체
// 비동기 작업의 (실행 ,상태관리 ,결과저장 , 병렬실행 ,재실행 등..)
// Promise의 3가지 상태 ( 대기 - 성공- 실패)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 (객체생성과 동시에 작업시작)
    // executor라고 함
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .catch((error) => {
    console.log(error);
  });
