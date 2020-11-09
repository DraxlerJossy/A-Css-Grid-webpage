const icon = document.querySelector(".icon");
const links = document.querySelector("#menu-header");

icon.addEventListener("click", () => {
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
  e.preventDefault();
});

//#####################About############################//

const main = document.querySelector("#main");
const small = document.querySelectorAll(".small-img img");

small.forEach((add) => add.addEventListener("click", imageClicked));

function imageClicked(e) {
  small.forEach((add) => (add.style.opacity = 1));

  main.src = e.target.src;

  //opacity
  e.target.style.opacity = 0.6;
}