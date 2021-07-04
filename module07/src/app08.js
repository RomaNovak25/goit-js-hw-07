const amount = document.querySelector('#controls').children[0];
const boxes = document.querySelector('#boxes');
const renderBtn = document.querySelector('#controls').children[1];
const clearBtn = document.querySelector('#controls').children[2];

renderBtn.addEventListener('click', render);
clearBtn.addEventListener('click', clear);

function render() {
  const value = amount.valueAsNumber;
  const array = [];
  let boxesSize = 30;

  for (let i = 0; i < value; i++) {
    array.push(
      `<div id="box" style="width: ${boxesSize}px; height: ${boxesSize}px; margin-top: 10px; background: ${chengeRandomColor()}; border-radius: 5px;"></div>`,
    );
    boxesSize += 10;
  }

  return boxes.insertAdjacentHTML('afterbegin', array.join(' '));
}

function clear() {
  const value = amount.valueAsNumber;

  for (let i = 0; i < value; i++) {
    boxes.removeChild(boxes.querySelector('#box'));
  }

  amount.value = '';
}

function chengeRandomColor() {
  const RGB = [];
  const alfa = Math.round(Math.random() * 100) / 100;

  for (let i = 0; i < 3; i++) {
    RGB.push(Math.floor(Math.random() * 256));
  }

  return `rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, ${alfa})`;
}

/*
Задание 8 - дополнительное, выполнять не обязательно

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/
