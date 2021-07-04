const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
const namesLetters = [];

inputEl.addEventListener('input', onChangeName);

function onChangeName(event) {
  if (event.data === null) {
    namesLetters.pop();
    nameOutputEl.textContent = namesLetters.join('');
  } else namesLetters.push(event.data);
  nameOutputEl.textContent = namesLetters.join('');

  if (namesLetters.length === 0) {
    nameOutputEl.textContent = 'незнакомец';
  }
}

/*Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */
