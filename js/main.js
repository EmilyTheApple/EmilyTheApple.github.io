var links, text;
links = ["/EmilyTheApple.github.io/Week1/index.html", "/EmilyTheApple.github.io/Week2/index.html", "/EmilyTheApple.github.io/Week3/index.html", "/EmilyTheApple.github.io/Week4/index.html", "/EmilyTheApple.github.io/Week5/index.html", "/EmilyTheApple.github.io/Week6/index.html"];

text = "<li>";
text += links.forEach(makeList);
text += "</li>";

function makeList(link) {
    text += "<a href='"+link+"'>Weekly Code</a>";
    return text;
}

document.getElementById("classLinks").innerhtml = text;