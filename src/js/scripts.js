var textSection = document.getElementById('textContent');
var myVar;
var time = 5;

textSection.addEventListener('keydown', runTimer);

function runTimer () {
    clearTimeout(myVar);
    myVar = setTimeout(timerAction, timerSetup(time));
}

function timerSetup(seconds) {
    return seconds * 1000;
}
// something
function timerAction () {
    deleteText();
}

function deleteText () {
    console.log("function has been run. This is inside textArea : " + textSection.value);
    textSection.value = "";
}

