let nextURL = "https://swapi.dev/api/people";
let previousURL = null;

// Fetch a list of people from the Star Wars API.
// The "next" parameter tells the function whether to fetch the next list of 10 people,
// or the previous list of 10 people.
function fetchPeople(next = true) {
    let url = "";
    if (next) {
        url = nextURL;
    } else {
        url = previousURL;
    }
    fetch(url).then(response => response.json()).then(json => {
        previousURL = json["previous"];
        nextURL = json["next"];
        // Disable "next" & "previous" buttons if there is no use for them.
        document.getElementById("next").disabled = nextURL ? false : true;
        document.getElementById("previous").disabled = previousURL ? false : true;
        return displayPeople(json["results"]);
    });
}
// Displays the list of people fetched by fetchPeople.
function displayPeople(peopleList) {
    document.getElementById("descriptionDiv").innerHTML = "";
    for (const i in peopleList) {
        const person = peopleList[i];
        const personDisplayElement = document.createElement("dl");
        personDisplayElement.classList.add('pagination')
        personDisplayElement.innerHTML = "<dt>Name</dt><dd>" + person["name"] + "</dd>"
        personDisplayElement.innerHTML += "<dt>Height</dt><dd>" + person["height"] + "</dd>";
        personDisplayElement.innerHTML += "<dt>Mass</dt><dd>" + person["mass"] + "</dd>";
        personDisplayElement.innerHTML += "<dt>Hair color</dt><dd>" + person['hair_color'] + "</dd>";
        personDisplayElement.innerHTML += "<dt>Skin color</dt><dd>" + person['skin_color'] + "</dd>";
        personDisplayElement.innerHTML += "<dt>Eye color:</dt><dd>" + person["eye_color"] + "</dd>";
        document.getElementById("descriptionDiv").appendChild(personDisplayElement);
    }
}

function pagination(nextURL) {
    
}