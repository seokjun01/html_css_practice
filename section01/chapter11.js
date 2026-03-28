//음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡복이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  });
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezeFood(cooldownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
