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