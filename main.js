import './style.css'
const container = document.querySelector('.container');

let colorArr = ['#CCE8CC','#F6EFEE','#E2B6CF','#E365C1']

setInterval(() => {
  let color = Math.floor(Math.random() * colorArr.length)
  let left = Math.random() * window.innerWidth;
  let top = Math.random() * window.innerHeight;
  let div = document.createElement('div')
  div.className = 'circle';
  div.style.top = top + 'px';
  div.style.left = left + 'px';
  div.style.backgroundColor = colorArr[color]

container.appendChild(div);
}, 100);
