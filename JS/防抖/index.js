let count = 1;
const container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

function getTime() {
  const time = document.getElementById('time');
  let count = 1;
  setInterval(() => {
    time.innerHTML = count++;
  }, 1000);
}

container.onmousemove = window.debounce(getUserAction, 1000, true);
getTime();
