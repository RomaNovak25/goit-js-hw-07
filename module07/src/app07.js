const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '16px';

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(even) {
  let factor = even.target.valueAsNumber * 0.32;

  textEl.style.fontSize = `${factor}px`;
}

/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
 */
