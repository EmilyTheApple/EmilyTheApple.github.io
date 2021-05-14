// build dynamic ordered list
const links = [ 
    { label: 'Week 1 Notes', url: 'week1.html', }, // you can add other tags if you like 
    { label: 'Week 2 Notes', url: 'week2.html', },
    { label: 'Week 3 Notes', url: 'week3.html', }, 
    { label: 'Week 4 Notes', url: 'week4.html', }
  ]; 
  
  const ol = document.getElementById('assignments');      // whatever your OL tag ID is 
  
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