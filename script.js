var catImage = document.getElementById("Clickable");
console.log(catImage);
var counter = document.getElementById("Counter");
var incrementClicks = function () {
    counter.innerText = (+counter.innerText + 1).toString();
    console.log(counter.innerText);
};
catImage.addEventListener("click", incrementClicks);
