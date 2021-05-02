const links = ['/Week1/index.html', '/Week2/index.html', '/Week3/index.html'];
const ol = document.getElementById('classLinks');
const output = () => {
    for (var i = 0; i < links.length; i++) {
    const list = '<li><a href="';
    list += links[i];
    list += '">Week '
    list += i + 1;
    list += '</a></li>'
    return list;
    }
}

ol.innerhtml = list;