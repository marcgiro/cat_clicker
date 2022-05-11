const catImage: HTMLElement = document.getElementById("Clickable");

const counter: HTMLElement = document.getElementById("Counter");

const incrementClicks = () => {
  counter.innerText = (+counter.innerText + 1).toString();
};

catImage.addEventListener("click", incrementClicks);
