let counter = 1;
let texts = {
    "quizzes": "#857AFF",
    "games": "#F8E379",
    "activities": "#71F3C4",
    "marketing pages": "#FB6E6E",
};
const textsNames = Object.keys(texts);
const textsColors = Object.values(texts);
function slideUp() {
    const one = document.getElementById("one");
    let h1 = document.createElement("h1");
    h1.innerHTML = textsNames[counter];
    h1.style.color = textsColors[counter];
    h1.id = "one";
    one.parentNode.replaceChild(h1, one);
    one.innerHTML = textsNames[counter];
    counter++;
    if (counter == textsNames.length) {
    counter = 0;
    }
}
setInterval(slideUp, 2200);

const hamburger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".close");
hamburger.addEventListener("click", () => {
    sidenav.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
    sidenav.style.display = "none";
});