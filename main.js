const buttons = document.querySelectorAll('button')
const computerChoice = document.querySelector('.computer-choice')
const userChoice = document.querySelector('.you-choice')
const winner = document.querySelector('.result')
const re = document.querySelector('restart')

const show = (user, computer, res) => {
  computerChoice.innerText = computer
  userChoice.innerText = user
  winner.innerText = res
}

const result = ['가위','바위','보']

const game = (user, computer) => {
  let message

  if(user === computer){
    message = '무승부'
  }else{
    switch(user+computer){
      case '가위보':
      case '바위가위':
      case '보바위':
        message = '사용자 승리!'
        break;
      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리ㅠㅠ'
        break;
    }
  }

  show(user, computer, message)
}

let timer = 0;
let lastPcSelection = "";
let pcSelection = "";

const pcImage = document.getElementById("pc-image")

function changeImg (){
  while(true){
    pcSelection = parseInt(Math.random() * 3);
    
    if(pcSelection !== lastPcSelection){
      lastPcSelection = pcSelection;
      break;
    }
  }

  switch (pcSelection) {
    case 0:
        pcImage.src = "https://sypear.github.io/game-world/img/game-rps/scissors.png";
        pcImage.alt = "컴퓨터 선택: 가위";
        break;

    case 1:
        pcImage.src = "https://sypear.github.io/game-world/img/game-rps/rock.png";
        pcImage.alt = "컴퓨터 선택: 바위";
        break;

    case 2:
        pcImage.src = "https://sypear.github.io/game-world/img/game-rps/paper.png";
        pcImage.alt = "컴퓨터 선택: 보";
        break;

    default:
  }
}

window.onload = function(){
  timer = setInterval(changeImg, 300);
}

const play = (event) => {
  const user = event.target.innerText
  const computer = result[Math.floor(Math.random() * 3)]
  game(user, computer)
  clearInterval(timer)
}

buttons.forEach((button) => {
  button.addEventListener('click', play)
})
