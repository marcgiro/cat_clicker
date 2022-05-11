const firstCatImage: HTMLElement = document.getElementById("First cat image");

const firstCatCounter: HTMLElement =
  document.getElementById("Counter first cat");

const incrementClicksFirstCat = () => {
  firstCatCounter.innerText = (+firstCatCounter.innerText + 1).toString();
};

firstCatImage.addEventListener("click", incrementClicksFirstCat);

const secondCatImage: HTMLElement = document.getElementById("Second cat image");

const secondCatCounter: HTMLElement =
  document.getElementById("Counter second cat");

const incrementClicksSecondCat = () => {
  secondCatCounter.innerText = (+secondCatCounter.innerText + 1).toString();
};

secondCatImage.addEventListener("click", incrementClicksSecondCat);
