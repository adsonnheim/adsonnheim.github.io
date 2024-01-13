const projectDiv = document.querySelector(".projects");
const resumeDiv = document.querySelector(".resume");
const aboutDiv = document.querySelector(".about");
const boxesDiv = document.querySelector(".boxes");
const footer = document.querySelector(".footer");
const back = document.querySelector(".back");

const projectsSheet = document.querySelector(".projectsSheet");
const resumeSheet = document.querySelector(".resumeSheet");
const aboutSheet = document.querySelector(".aboutSheet");

const divAnimationDown = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5},{opacity: "0", transform: "translateY(50vh)", offset: 1}];

const divAnimationUp = [{opacity: "1", transform: "translateY(0vh)", offset: 0.0}, {opacity: "0", offset: 0.5}, {opacity: "0", transform: "translateY(-50vh)", offset: 1}];

const footerAnimation = [{opacity: "1"}, {opacity: "0", offset: 0.5}, {opacity: "0"}];

const sheetAnimation = [{"animation-timing-function:": "ease-in", left: "-30vw"}, {left: "calc(50% - 12.5vw)"}];

const backAnimation = [{opacity: "0"}, {opacity: "1"}];

const backAnimationDisappear = [{opacity: "1"}, {opacity: "0"}];

const timing = {
  duration: 500,
  iterations: 1,
  fill: "forwards" 
};

const slowTiming = {
  duration: 1000,
  iterations: 1,
  fill: "forwards"
};

function moveCenterBoxes() {
  projectDiv.animate(divAnimationDown, timing);

  aboutDiv.animate(divAnimationDown, timing);

  resumeDiv.animate(divAnimationUp, timing);

  footer.animate(footerAnimation, timing);

  back.animate(backAnimation, slowTiming);

  document.getElementById("backID").style.pointerEvents = "all";
}

function removeCenterBoxes() {
  projectDiv.remove();
  aboutDiv.remove();
  resumeDiv.remove();
  footer.remove();
}

// TODO: Make left and right divs move away from center before descending.
function moveProjects() {
  moveCenterBoxes();

  setTimeout(function () {
    projectsSheet.animate(sheetAnimation, timing);

    //removeCenterBoxes();
  }, 450);
}

function moveResume() {
  moveCenterBoxes();

  setTimeout(function () {
    resumeSheet.animate(sheetAnimation, timing);

    //removeCenterBoxes();
  }, 450);
}

function moveAbout() {
  moveCenterBoxes();

  setTimeout(function () {
    aboutSheet.animate(sheetAnimation, timing);

    //removeCenterBoxes();
  }, 450);
}

function resetPage() {
  back.animate(backAnimationDisappear, slowTiming);
  document.getElementById("backID").style.pointerEvents = "none";
}

projectDiv.addEventListener("click", moveProjects);
resumeDiv.addEventListener("click", moveResume);
aboutDiv.addEventListener("click", moveAbout);

back.addEventListener("click", resetPage);