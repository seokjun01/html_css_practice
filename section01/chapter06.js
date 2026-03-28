// 배열 순회
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// for of , for each , for in  반복문
// 1. for of (오직 배열 순회만을 위한 키워드)

for (let item of arr) {
  //    console.log(item);
  // arr의 요소들을 item에 순서대로 담음
}

// 2. 객체 순회

let person = {
  name: "문석준",
  age: 26,
  hobby: "테니스",
};

// 2.1 Object.keys() 사용
// 객체에서 키값들만 뽑아서 '배열로'전환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}
