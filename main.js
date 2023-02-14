import './style.css'
const container = document.querySelector('.container');
const button = document.querySelector('.button');
let colorArr = ['#CC4BC2','#F6EFEE','#E2B6CF','#E365C1']

function mouseDownHandler() {
  window.location.reload();
}
button.addEventListener('click', mouseDownHandler)



function createDiv() {
  let height = Math.random() * 75;
  let width = Math.random() * 75;
  let color = Math.floor(Math.random() * colorArr.length)
  let left = Math.random() * window.innerWidth -5;
  let top = Math.random() * window.innerHeight-5;

  let div = document.createElement('div')
  div.className = 'circle';
  div.style.top = top + 'px';
  div.style.left = left + 'px';
  div.style.backgroundColor = colorArr[color]
  div.style.width = width + 'px';
  div.style.height = height + 'px';
container.appendChild(div);
}
function gameLoop() {
  for(let i = 0; i < 20; i++) {
    createDiv();
  }
  requestAnimationFrame(gameLoop);
}


gameLoop();