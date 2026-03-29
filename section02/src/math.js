// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS (common 모듈 시스템)
//module.exports = {
//  add,
//  sub,
//};

// ES 모듈 시스템

export default function multiply(a, b) {
  return a * b;
}
