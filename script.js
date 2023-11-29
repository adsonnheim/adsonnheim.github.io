const projectDiv = document.querySelector(".projects");
const resumeDiv = document.querySelector(".resume");
const aboutDiv = document.querySelector(".about");

const footer = document.querySelector(".footer");

const divAnimationDown = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5},{opacity: "0", transform: "translateY(50vh)", offset: 1}];

const divAnimationUp = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5}, {opacity: "0", transform: "translateY(-50vh)", offset: 1}];

const footerAnimation = [{opacity: "1"}, {opacity: "0", offset: 0.5}, {opacity: "0"}];

const timing = {
  duration: 750,
  iterations: 1,
};

// TODO: Make left and right divs move away from center before descending.
function moveAll() {
  projectDiv.animate(divAnimationDown, timing);

  aboutDiv.animate(divAnimationDown, timing);

  resumeDiv.animate(divAnimationUp, timing);

  footer.animate(footerAnimation, timing);
}

projectDiv.addEventListener("click", moveAll);
resumeDiv.addEventListener("click", moveAll);
aboutDiv.addEventListener("click", moveAll);