const links = [ 
    {label: "Week1 notes", url: "week1/index.html" }, 
  {label: "Week2 notes", url: "week2/index.html"}];

text = "<li>";
text += links.forEach( links => text+=`<a href="${links.index.url}" label="${links.index.label}"`)
text += "</li>";
{
    text += "<a href='"+link+"'>Weekly Code</a>";
    return text;
}

document.getElementById("classLinks").innerhtml = text;