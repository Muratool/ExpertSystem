const speedHTML = document.querySelector('.speedNum');
const distanceHTML = document.querySelector('.distanceNum');

const whatToDo = document.querySelector('.what-to-do');

const checkInfo = document.querySelector('.checkInfo');

//Входные параметры: скорость движения робота и расстояние до объекта
let speedReal = speedHTML.innerHTML;
let distanceReal = distanceHTML.innerHTML;



//Выходные параметры
let action = ""; // Действие для управления скоростью

// Расстояние считается близким, если меньше или равно 2 единицам
function isDistanceClose(distance) {
  return distance <= 2;
}

// Расстояние считается средним, если больше 2 и меньше или равно 5 единицам
function isDistanceMedium(distance) {
  return distance > 2 && distance <= 5;
}

// Расстояние считается далеким, если больше 5 единиц
function isDistanceFar(distance) {
  return distance > 5;
}

// Скорость считается низкой, если меньше или равна 2 единицам
function isSpeedLow(speed) {
  return speed <= 2;
}

// Скорость считается средней, если больше 2 и меньше или равна 5 единицам
function isSpeedMedium(speed) {
  return speed > 2 && speed <= 5;
}

// Скорость считается высокой, если больше 5 единиц
function isSpeedHigh(speed) {
  return speed > 5;
}

function decideAction(distance, speed) {
  if (isDistanceClose(distance) && isSpeedHigh(speed)) {
    action = "Замедлить";
  } else if (isDistanceClose(distance) && isSpeedMedium(speed)) {
    action = "Замедлить";
  } else if (isDistanceClose(distance) && isSpeedLow(speed)) {
    action = "Остановить";
  } else if (isDistanceMedium(distance) && isSpeedHigh(speed)) {
    action = "Замедлить";
  } else if (isDistanceMedium(distance) && isSpeedMedium(speed)) {
    action = "Поддерживать";
  } else if (isDistanceMedium(distance) && isSpeedLow(speed)) {
    action = "Ускорить";
  } else if (isDistanceFar(distance) && isSpeedHigh(speed)) {
    action = "Поддерживать";
  } else if (isDistanceFar(distance) && isSpeedMedium(speed)) {
    action = "Ускорить";
  } else if (isDistanceFar(distance) && isSpeedLow(speed)) {
    action = "Ускорить";
  }
  return action;
}

// for (let i = 0; i < 100; i++) {
//   speed = +speedHTML;
//   distance = +distanceHTML;

//   setTimeout(() => {
//     whatToDo.innerHTML = decideAction(distance, speed);
//   }, 1000 * i);
// }

checkInfo.addEventListener('click', () => {
  console.log('click');
  whatToDo.innerHTML = ``;

  speedReal = +speedHTML.value;
  distanceReal = +distanceHTML.value;

  decideAction(+distanceReal, +speedReal);
  whatToDo.innerHTML = action;
})