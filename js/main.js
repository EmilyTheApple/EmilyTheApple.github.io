const links, text;
links = [
  {label: "Week1 notes", url: "week1/index.html" }, 
  {label: "Week2 notes", url: "week2/index.html"}];

text = "<li>";
text += links.forEach(makeList);
text += "</li>";

function makeList(link) {
    text += "<a href='"+link+"'>Weekly Code</a>";
    return text;
}

document.getElementById("classLinks").innerhtml = text;