var firstCatImage = document.getElementById("First cat image");
var firstCatCounter = document.getElementById("Counter first cat");
var incrementClicksFirstCat = function () {
    firstCatCounter.innerText = (+firstCatCounter.innerText + 1).toString();
};
firstCatImage.addEventListener("click", incrementClicksFirstCat);
var secondCatImage = document.getElementById("Second cat image");
var secondCatCounter = document.getElementById("Counter second cat");
var incrementClicksSecondCat = function () {
    secondCatCounter.innerText = (+secondCatCounter.innerText + 1).toString();
};
secondCatImage.addEventListener("click", incrementClicksSecondCat);
