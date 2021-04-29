function writeContent() {
    let textbox = parseInt(document.getElementById("textbox").value);
    let output = 0;
    for (let i=1; i<=textbox; i+=1)
      output = output + i;
    document.getElementById("contents").innerHTML = output;
  }
  
  const sum = function() {
    
  }
  
  const sub = () => {
    
  }