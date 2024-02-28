let bubbleClutter = '';
let timer = 60;
let score=0;

let makeBubble = () => {
  for (let i = 0; i < 98; i++) {
    bubbleClutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
  }
  document.querySelector('#panel-bottom').innerHTML = bubbleClutter;
}

let updateTimer = () => {
  let timerFlg = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateScore();
      document.getElementById('timer').textContent = timer.toString();
    } else {
      clearInterval(timerFlg);
    }
  }, 1000);

}

let setHitValue = ()=>{
  document.getElementById('hit').textContent = Math.floor(Math.random()*10).toString();
}

let updateScore = ()=>{
  score +=100;
  document.getElementById('score').textContent = score.toString();
}

makeBubble();
updateTimer();
setHitValue();

