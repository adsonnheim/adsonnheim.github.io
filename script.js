const projectDiv = document.querySelector(".projects");
const resumeDiv = document.querySelector(".resume");
const aboutDiv = document.querySelector(".about");
const boxesDiv = document.querySelector(".boxes");

const footer = document.querySelector(".footer");

const testDiv = document.querySelector(".test");

const divAnimationDown = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5},{opacity: "0", transform: "translateY(50vh)", offset: 1}];

const divAnimationUp = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5}, {opacity: "0", transform: "translateY(-50vh)", offset: 1}];

const footerAnimation = [{opacity: "1"}, {opacity: "0", offset: 0.5}, {opacity: "0"}];

const testAnimation = [{left: "-30vw"}, {left: "calc(50% - 12.5vw)"}];

const timing = {
  duration: 500,
  iterations: 1,
  fill: "forwards"
};

const slowTimer = {
  duration: 5000,
  iterations: 1,
  fill: "forwards"
};

// TODO: Make left and right divs move away from center before descending.
function moveAll() {
  projectDiv.animate(divAnimationDown, timing);

  aboutDiv.animate(divAnimationDown, timing);

  resumeDiv.animate(divAnimationUp, timing);

  footer.animate(footerAnimation, timing);

  setTimeout(function () {
    boxesDiv.remove();
    resumeDiv.remove();
    aboutDiv.remove();
    projectDiv.remove();
    footer.remove();
    testDiv.animate(testAnimation, slowTimer);
  }, 500);

  document.body.appendChild(footer);
}

projectDiv.addEventListener("click", moveAll);
resumeDiv.addEventListener("click", moveAll);
aboutDiv.addEventListener("click", moveAll);