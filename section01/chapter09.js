// 5가지의 배열 변형 메서드
// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// (자주씀)

let arr1 = [
  { name: "문석준", hobby: "테니스" },
  { name: "준", hobby: "테니스" },
  { name: "석", hobby: "서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);

// 2. map 이것도 자주씀
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값을 모아 , 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬함
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);
// 숫자의 대소기준으로 정렬하려면 콜백함수를 넣어야함
arr3.sort((a, b) => {
  if (a > b) {
    return -1; // b ,a 배치
  } else if (b > a) {
    return 1; // a,b 배치
  } else {
    return 0;
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();
