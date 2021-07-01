function generateCat() {
    var display = document.createElement('img');
    var Catdiv = document.getElementById('generate-result');
    display.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    Catdiv.appendChild(display);
}