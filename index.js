// DOM
const keyDOM = document.querySelector('#key');
const noticeDOM = document.querySelector('#notice');
const keyCodeDOM = document.querySelector('#keycode');

// Status
let init = false;

document.addEventListener('keydown', (event) => {
  if (!init) {
    init = true;
    noticeDOM.className = noticeDOM.className.replace('inline', 'hidden');
    keyDOM.className = keyDOM.className.replace('hidden', 'flex');
    keyCodeDOM.className = keyCodeDOM.className.replace('hidden', 'inline');
  }

  keyDOM.innerHTML = event.key;
  keyCodeDOM.textContent = event.keyCode;
});