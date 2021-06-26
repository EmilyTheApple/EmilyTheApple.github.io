// build dynamic ordered list
const links = [{
    label: 'Week 1 Notes',
    url: 'week1.html',
  }, // you can add other tags if you like 
  {
    label: 'Week 2 Notes',
    url: 'week2.html',
  },
  {
    label: 'Week 3 Notes',
    url: 'week3.html',
  },
  {
    label: 'Week 3 Team Activity',
    url: 'w03-teamActivity.html',
  },
  {
    label: 'Week 4 Notes',
    url: 'week4.html',
  },
  {
    label: 'Week 4 Team Activity',
    url: 'w04-teamActivity.html',
  },
  {
    label: 'Week 5 Notes',
    url: 'week5.html',
  },
  {
    label: 'Week 5 Team Activity',
    url: 'w05-teamActivity.html',
  }, {
    label: 'Week 6 Notes',
    url: 'week6.html',
  },
  {
    label: 'Week 7 Notes',
    url: 'week7.html',
  },
  {
    label: 'Week 7 Team Activity',
    url: 'hiking-complete.html',
  },
  {
    label: 'Week 8 Notes',
    url: 'week8.html',
  },
  {
    label: 'Week 8 Team Activity',
    url: 'w08-teamActivity.html',
  },
  {
    label: 'Week 9 Notes',
    url: 'week9.html',
  },
  {
    label: 'Week 9 Team Activity',
    url: 'w09/index.html',
  },
  {
    label: 'Week 10 Notes',
    url: 'week10.html',
  },
  {
    label: 'Week 10 Team Activity',
    url: 'w10-teamActivity.html',
  },
];

const ol = document.getElementById('assignments'); // whatever your OL tag ID is 

links.forEach(link => {

  let li = document.createElement('li');

  let a = document.createElement('a');

  a.setAttribute('href', link.url);

  a.innerText = link.label;

  // add other tags of interest if you like (date submitted, score) 

  li.appendChild(a);

  ol.appendChild(li);

});


//week 2 team activity code
function writeContent() {
  const textbox = parseInt(document.getElementById("textbox").value);
  const contents = document.getElementById('contents');
  contents.innerHTML = sum(textbox);
};

function sum(number) {
  let output = 0;
  for (let i = 1; i <= number; i += 1) {
    output += i;
  }
  return output
}

function add() {
  const textbox1 = parseFloat(document.getElementById('textbox1').value);
  const textbox2 = parseFloat(document.getElementById('textbox2').value);
  const output = document.getElementById('answer');
  const answer = textbox1 + textbox2;
  output.innerHTML = 'Total: ' + answer;
}

function sub() {
  const textbox1 = parseFloat(document.getElementById('textbox1').value);
  const textbox2 = parseFloat(document.getElementById('textbox2').value);
  const output = document.getElementById('answer');
  const answer = textbox1 - textbox2;
  output.innerHTML = 'Total: ' + answer;
}

function mult() {
  const textbox1 = parseFloat(document.getElementById('textbox1').value);
  const textbox2 = parseFloat(document.getElementById('textbox2').value);
  const output = document.getElementById('answer');
  const answer = textbox1 * textbox2;
  output.innerHTML = 'Total: ' + answer;
}

function divide() {
  const textbox1 = parseFloat(document.getElementById('textbox1').value);
  const textbox2 = parseFloat(document.getElementById('textbox2').value);
  const output = document.getElementById('answer');
  const answer = textbox1 / textbox2;
  output.innerHTML = 'Total: ' + answer;
}

// Week 4 Team Activity
let player = 1;
const boxes = document.querySelectorAll('.box');
const resetTicTacToe = document.getElementById('tictacreset');

// This function handles the click of the player in the tictac box.        
function handleClick(event) {
  if (player == 1) {
    event.srcElement.textContent = "X";
    player = 2;
  } else {
    event.srcElement.textContent = "O";
    player = 1;
  }
  this.removeEventListener('touchend', handleClick);
  checkWinner();
}

function handleReset() {
  player = 1;
  boxEventHandler();
}

function boxEventHandler() {
  boxes.forEach((box) => {
    box.addEventListener('touchend', handleClick, false);
    box.textContent = '';
  });
}

function gameOver() {
  alert("It was a tie... Try again...");
}

function checkWinner() {
  // The winning positions
  const winningPlay = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  // Test for some filled boxes
  let filledBox = false;
  // Test for some empty boxes
  let emptyBox = false;
  // Test for the full frame with no empty spaces
  boxes.forEach((box) => box.textContent != '' ? filledBox = true : emptyBox = true);

  // Test for the winning conditions
  winningPlay.forEach(
    (element) => {
      if (boxes[element[0]].innerHTML != '' &&
        boxes[element[0]].innerHTML == boxes[element[1]].innerHTML &&
        boxes[element[0]].innerHTML == boxes[element[2]].innerHTML) {
        alert(`Player ${player == 1 ? 2:1} wins this round`);
        //Reset the game if winner is found
        handleReset();
      }
    });

  // If all boxes are full then there will be no empty boxes, alert to a tie.
  filledBox == true && emptyBox == false ? gameOver() : null;
}

// The following will ONLY work on mobile devices.
// 'click' should be used instead of touchend but not what was in the instructions.
boxEventHandler();
//Reset the game with button click. Again, it will ONLY work on mobile
// The instructions were to use touchend and click not working in browser.
resetTicTacToe.addEventListener('touchend', handleReset, false);