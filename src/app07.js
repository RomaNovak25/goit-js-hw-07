const inputEl = document.querySelector('#font-size-control');
const inputValue = inputEl.valueAsNumber;
const textEl = document.querySelector('#text');
const firstSize = parseInt(window.getComputedStyle(textEl).fontSize)

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(event) {
    textEl.style.fontSize = `${firstSize / inputValue * event.target.valueAsNumber}px`;
};

/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
 */